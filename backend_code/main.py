import os
import aiofiles
import pickle

import jwt
import pandas as pd
from sanic import Sanic
from sanic.response import json
from sanic.exceptions import SanicException
from sanic_cors import CORS
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.hash import bcrypt
import numpy as np
import re
from PIL import Image
import pytesseract as pyt
from datetime import datetime


from IPython.display import display

pyt.pytesseract.tesseract_cmd = "C:\\Users\\hp\\AppData\\Local\\Programs\\Tesseract-OCR\\tesseract.exe"
app = Sanic("SignupApp")
# Enable CORS on the entire app
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# MongoDB setup
# Replace with your actual MongoDB connection string
mongo_uri = "mongodb+srv://21pa1a05b6:vOKAtPrxbODmQ87W@cluster0.mwzqsiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = AsyncIOMotorClient(mongo_uri)
db = client["loan-users"]
UPLOAD_DIR = "C:\\Users\\hp\\Desktop\\mosurtech\\form_files"

if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)


# Modified Signup Route with JWT
@app.route("/signup", methods=["POST", "OPTIONS"])
async def signup(request):
    if request.method == "OPTIONS":
        return json({}, status=204)

    try:
        data = request.json
        if not data:
            raise SanicException("No data provided", status_code=400)

        # Hash the password
        hashed_password = bcrypt.hash(data["password"])
        print(hashed_password)
        # Create user data object
        user = {
            "firstname": data["firstname"],
            "lastname": data["lastname"],
            "email": data["email"],
            "password": hashed_password,
            "gender": data["gender"]
        }

        # Insert user data into MongoDB
        result = await db.users.insert_one(user)
        
        user_id = str(result.inserted_id)
        print(user_id)
        payload = {
            "user_id": str(user["_id"]),
            "message": "hello",
            
        }

        # Create JWT token
        token = jwt.encode( payload, "hello", algorithm="HS256")
        print(token)

        return json(
            {"message": "User created successfully",
             "user_id": user_id,
             "token": token},
            status=200
        )

    except Exception as e:
        print(f"An error occurred: {e}")
        return json(
            {"description": "Internal Server Error", "status": 500,
             "message": "The application encountered an unexpected error and could not continue."},
            status=500
        )


# Modified Login Route with JWT
@app.route("/login", methods=["POST", "OPTIONS"])
async def login(request):
    if request.method == "OPTIONS":
        return json({}, status=204)

    try:
        data = request.json
        if not data:
            raise SanicException("No data provided", status_code=400)

        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            raise SanicException(
                "Email and password are required", status_code=400)

        # Find user by email
        user = await db.users.find_one({"email": email})
        if not user:
            return json(
                {"message": "Invalid email or password"},
                status=401
            )

        # Verify password
        if not bcrypt.verify(password, user["password"]):
            return json(
                {"message": "Invalid email or password"},
                status=401
            )
        payload = {
            "user_id": str(user["_id"]),
            "message": "hello",
            
        }

        # Create JWT token
        token = jwt.encode( payload, "hello", algorithm="HS256")

        return json(
            {"message": "Login successful", "token": token},
            status=200
        )

    except Exception as e:
        print(f"An error occurred: {e}")
        return json(
            {"description": "Internal Server Error", "status": 500,
             "message": "The application encountered an unexpected error and could not continue."},
            status=500
        )


@app.route("/registration", methods=["POST", "OPTIONS"])
async def registration(request):
    if request.method == "OPTIONS":
        return json({}, status=204)

    try:
        data = request.json
        if not data:
            raise SanicException("No data provided", status_code=400)

        # Function to convert and validate input
        def get_int_value(key, default=0):
            value = data.get(key, default)
            try:
                return int(value)
            except ValueError:
                raise SanicException(
                    f"Invalid value for {key}: must be an integer", status_code=400)

        data1 = {
            'Annual_Income': get_int_value("annualIncome"),
            'Monthly_Inhand_Salary': get_int_value("monthlyInhandSalary"),
            'Num_Bank_Accounts': get_int_value("numberOfBankAccounts"),
            'Num_Credit_Card': get_int_value("numberOfCreditCards"),
            'Interest_Rate': get_int_value("interestRate"),
            'Num_of_Loan': get_int_value("numberOfLoans"),
            'Delay_from_due_date': 0,  # Default value as specified
            'Num_of_Delayed_Payment': 0,  # Default value as specified
            'Changed_Credit_Limit': get_int_value("creditlimit"),
            'Num_Credit_Inquiries': 4,  # Default value as specified
            'Credit_History_Age': get_int_value("credit_history"),
            'Total_EMI_per_month': get_int_value("totalEmisPerMonth"),
            'Amount_invested_monthly': get_int_value("amountInvestedMonthly"),
            'Monthly_Balance': get_int_value("monthlybalance"),
        }

        # Define calculation functions
        def calculate_dti_ratio(total_emi_per_month, monthly_inhand_salary):
            return float((total_emi_per_month / monthly_inhand_salary) * 100)

        def calculate_outstanding_debt(monthly_balance, total_emi_per_month):
            return abs(monthly_balance) + total_emi_per_month

        def calculate_credit_utilization_ratio(monthly_balance, credit_history_age):
            if credit_history_age == 0:
                return 0  # Handle division by zero
            return float((abs(monthly_balance) / credit_history_age) * 100)

        def calculate_credit_mix(num_credit_cards, num_loans):
            if num_credit_cards == 0 or num_loans == 0:
                return 0  # Bad credit mix: no diversity
            elif num_credit_cards > 0 and num_loans > 0:
                if num_credit_cards >= 2 and num_loans >= 2:
                    return 2  # Good credit mix: diverse and balanced
                else:
                    return 1  # Standard/Neutral credit mix: some diversity but not optimal
            # Fallback case (although all scenarios should be covered)
            return 0

        # Perform calculations
        data1['DTI_Ratio'] = calculate_dti_ratio(
            data1['Total_EMI_per_month'], data1['Monthly_Inhand_Salary'])
        data1['Outstanding_Debt'] = calculate_outstanding_debt(
            data1['Monthly_Balance'], data1['Total_EMI_per_month'])
        data1['Credit_Utilization_Ratio'] = calculate_credit_utilization_ratio(
            data1['Monthly_Balance'], data1['Credit_History_Age'])
        data1['Credit_Mix'] = calculate_credit_mix(
            data1['Num_Credit_Card'], data1['Num_of_Loan'])
        data1['aadharnumber'] = data.get("aadharNumber")

        # Load the saved model
        model_filename = 'rnd_model.pkl'
        with open(model_filename, 'rb') as model_file:
            clf = pickle.load(model_file)

        # Predict using the model
        df = pd.DataFrame([data1])  # Convert to DataFrame
        selected_columns = [
            'Annual_Income', 'Monthly_Inhand_Salary', 'Num_Bank_Accounts',
            'Num_Credit_Card', 'Interest_Rate', 'Num_of_Loan', 'Delay_from_due_date',
            'Num_of_Delayed_Payment', 'Changed_Credit_Limit', 'Num_Credit_Inquiries',
            'Credit_Mix', 'Outstanding_Debt', 'Credit_Utilization_Ratio',
            'Credit_History_Age', 'Total_EMI_per_month', 'Amount_invested_monthly',
            'Monthly_Balance', 'DTI_Ratio'
        ]
        df8 = df[selected_columns]

        predicted_credit_score = clf.predict(
            df8)[0]  # Get the first prediction

        data1['Predicted_Credit_Score'] = predicted_credit_score

        # Convert numpy types to native Python types
        for key, value in data1.items():
            if isinstance(value, (np.integer, np.floating)):
                data1[key] = value.item()

        result = await db.registration.insert_one(data1)
        return json(
            {"message": str(result.inserted_id)},
            status=200
        )

    except SanicException as e:
        return json({"description": e.args[0], "status": e.status_code, "message": str(e)}, status=e.status_code)
    except Exception as e:
        print(f"An error occurred: {e}")
        return json(
            {"description": "Internal Server Error", "status": 500,
             "message": "The application encountered an unexpected error and could not continue."},
            status=500
        )

# Replace with your upload directory
@app.route("/application", methods=["POST", "OPTIONS"])
async def application(request):
    if request.method == "OPTIONS":
        return json({}, status=204)

    try:
        data = request.form
        files = request.files
        dob_input = data.get("dob")
        try:
            # Adjust the format to match your input format
            dob_parsed = datetime.strptime(dob_input, "%Y-%m-%d")
            dob_formatted = dob_parsed.strftime("%d/%m/%Y")
            print(dob_formatted)
        except ValueError:
            return json({"message": "Invalid date format. Please use YYYY-MM-DD."}, status=400)

        form_data = {
            "name": data.get("name"),
            "dob": dob_formatted,
            "address": data.get("address"),
            "aadharNumber": data.get("aadharNumber"),
            "contact": data.get("contact"),
            "email": data.get("email"),
            "occupation": data.get("occupation"),
            "sourceOfFunds": data.get("sourceOfFunds"),
            
        }

        # Save files and store their paths in the form_data
        if "photograph" in files:
            photograph = files.get("photograph")
            photograph_path = os.path.join(UPLOAD_DIR, photograph.name)
            async with aiofiles.open(photograph_path, 'wb') as f:
                await f.write(photograph.body)
            form_data["photograph"] = photograph_path

        if "signature" in files:
            signature = files.get("signature")
            signature_path = os.path.join(UPLOAD_DIR, signature.name)
            async with aiofiles.open(signature_path, 'wb') as f:
                await f.write(signature.body)
            form_data["signature"] = signature_path

        if "kycDocuments" in files:
            kyc_document = files.get("kycDocuments")
            kyc_document_path = os.path.join(UPLOAD_DIR, kyc_document.name)
            async with aiofiles.open(kyc_document_path, 'wb') as f:
                await f.write(kyc_document.body)
            form_data["kycDocument"] = kyc_document_path

            # Process image and verify details
            image_path = form_data["kycDocument"]
            image = Image.open(image_path)
            extracted_text = pyt.image_to_string(image)
            print("Extracted Text:", extracted_text)

            # For demonstration, print the extracted text and expected details
            expected_name = data.get("name")
            expected_date = form_data["dob"]
            expected_id = data.get("aadharNumber")
            
            print(expected_date)

            def verify_details(extracted_text, expected_name, expected_date, expected_id):
                # Use regex to find details in extracted text
                name_match = re.search(
                    re.escape(expected_name), extracted_text, re.IGNORECASE)
                date_match = re.search(
                    re.escape(expected_date), extracted_text)
                id_match = re.search(re.escape(expected_id), extracted_text)

                # Verify and print results
                if name_match and date_match and id_match:
                    return True
                else:
                    return False

            # Verify the extracted details
            if verify_details(extracted_text, expected_name, expected_date, expected_id):
                form_data["verification_status"]="Your Application is succesfully verified"
                result = await db.application.insert_one(form_data)
                return json(
                    {"message": "Application verified successfully",
                     "application_id": str(result.inserted_id)},
                    status=200
                )
            else:
                form_data["verification_status"]="Your Application is not  verified Please Try Again"
                result = await db.application.insert_one(form_data)
                return json(
                    {"message": "Please reupload document"},
                    status=200
                )

    except Exception as e:
        print(f"An error occurred: {e}")
        return json(
            {"description": "Internal Server Error", "status": 500,
             "message": "The application encountered an unexpected error and could not continue."},
            status=500
        )
@app.route("/retrieveScore", methods=["GET"])
async def retrieve_score(request):
    aadhar_number = request.args.get("aadharNumber")
    if not aadhar_number:
        return json({"error": "Missing aadharNumber"}, status=400)

    try:
        # Query the registration and application collections
        registration_record = await db.registration.find_one({"aadharnumber": aadhar_number})
        application_record = await db.application.find_one({"aadharNumber": aadhar_number})
        
        # Print records for debugging
        print("Registration Record:", registration_record)
        print("Application Record:", application_record)
        
        if not registration_record:
            return json({"error": "Registration record not found"}, status=404)
        
        if not application_record:
            return json({"error": "Application record not found"}, status=404)

        name = application_record.get("name")
        dob = application_record.get("dob")
        address = application_record.get("address")
        aadharNumber = application_record.get("aadharNumber")
        contact = application_record.get("contact")
        verification_status = application_record.get("verification_status")
        predicted_score = registration_record.get("Predicted_Credit_Score")

        return json({
            "name":name,
            "dob":dob,
            "address":address,
            "aadharNumber":aadharNumber,
            "contact":contact,
            "Predicted_Credit_Score": predicted_score,
            "verification_status": verification_status
        }, status=200)

    except Exception as e:
        print(f"An error occurred: {e}")
        return json(
            {"description": "Internal Server Error", "status": 500,
             "message": "The application encountered an unexpected error and could not continue."},
            status=500
        )

if __name__ == "_main_":
    app.run(host="127.0.0.1", port=8000)