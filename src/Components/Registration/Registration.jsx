import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    aadharNumber: '',
    occupation: '',
    annualIncome: '',
    monthlyInhandSalary: '',
    numberOfBankAccounts: '',
    numberOfCreditCards: '',
    interestRate: '',
    numberOfLoans: '',
    typeOfLoan: '',
    totalEmisPerMonth: '',
    amountInvestedMonthly: '',
    creditlimit: '',
    monthlybalance: '',
    credit_history:'',
  });

  // Function to handle form submission
  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/registration', formData);
      console.log(response.data);
      // Redirect to the next page after successful registration
      navigate('/Application');
    } catch (error) {
      console.error('There was an error creating the user!', error);
      // Handle errors here
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLoginNavigation = () => {
    navigate('/application');
  };

  return (
    <div className="Reg-container">
      <h2 className="Reg-head">Registration</h2>
      <form className="Reg-form" onSubmit={handleRegistration}>
        <label className="Reg-label" htmlFor="name">Name:</label>
        <input
          className="Reg-input"
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="age">Age:</label>
        <input
          className="Reg-input"
          type="number"
          id="age"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="aadharNumber">Aadhar Number:</label>
        <input
          className="Reg-input"
          type="text"
          id="aadharNumber"
          name="aadharNumber"
          placeholder="Enter Aadhar Number"
          value={formData.aadharNumber}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="occupation">Occupation:</label>
        <input
          className="Reg-input"
          type="text"
          id="occupation"
          name="occupation"
          placeholder="Enter Occupation"
          value={formData.occupation}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="annualIncome">Annual Income:</label>
        <input
          className="Reg-input"
          type="number"
          id="annualIncome"
          name="annualIncome"
          placeholder="Enter Annual Income"
          value={formData.annualIncome}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="monthlyInhandSalary">Monthly Inhand Salary:</label>
        <input
          className="Reg-input"
          type="number"
          id="monthlyInhandSalary"
          name="monthlyInhandSalary"
          placeholder="Enter Monthly Inhand Salary"
          value={formData.monthlyInhandSalary}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="numberOfBankAccounts">Number of Bank Accounts:</label>
        <input
          className="Reg-input"
          type="number"
          id="numberOfBankAccounts"
          name="numberOfBankAccounts"
          placeholder="Enter Number of Bank Accounts"
          value={formData.numberOfBankAccounts}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="numberOfCreditCards">Number of Credit Cards:</label>
        <input
          className="Reg-input"
          type="number"
          id="numberOfCreditCards"
          name="numberOfCreditCards"
          placeholder="Enter Number of Credit Cards"
          value={formData.numberOfCreditCards}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="interestRate">Interest Rate:</label>
        <input
          className="Reg-input"
          type="number"
          id="interestRate"
          name="interestRate"
          placeholder="Enter Interest Rate"
          value={formData.interestRate}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="numberOfLoans">Number of Loans:</label>
        <input
          className="Reg-input"
          type="number"
          id="numberOfLoans"
          name="numberOfLoans"
          placeholder="Enter Number of Loans"
          value={formData.numberOfLoans}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="typeOfLoan">Type of Loan:</label>
        <input
          className="Reg-input"
          type="text"
          id="typeOfLoan"
          name="typeOfLoan"
          placeholder="Enter Type of Loan"
          value={formData.typeOfLoan}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="totalEmisPerMonth">Total EMI's per Month:</label>
        <input
          className="Reg-input"
          type="number"
          id="totalEmisPerMonth"
          name="totalEmisPerMonth"
          placeholder="Enter Total EMIs per Month"
          value={formData.totalEmisPerMonth}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="amountInvestedMonthly">Amount Invested Monthly:</label>
        <input
          className="Reg-input"
          type="number"
          id="amountInvestedMonthly"
          name="amountInvestedMonthly"
          placeholder="Enter Amount Invested Monthly"
          value={formData.amountInvestedMonthly}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="creditlimit">Credit Limit:</label>
        <input
          className="Reg-input"
          type="number"
          id="creditlimit"
          name="creditlimit"
          placeholder="Enter Credit Limit"
          value={formData.creditlimit}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="monthlybalance">Monthly Balance:</label>
        <input
          className="Reg-input"
          type="number"
          id="monthlybalance"
          name="monthlybalance"
          placeholder="Enter Monthly Balance"
          value={formData.monthlybalance}
          onChange={handleInputChange}
          required
        />

        <label className="Reg-label" htmlFor="credit_history">Enter credit history age:</label>
        <input
          className="Reg-input"
          type="number"
          id="credit_history"
          name="credit_history"
          placeholder="Enter credit history age"
          value={formData.credit_history}
          onChange={handleInputChange}
          required
        />

        <button className="Reg-btn" type="submit">Register</button>
      </form>
      <div className="Reg-btn-container">
        <button className="Reg-btn" onClick={handleLoginNavigation}>Go to Application</button>
      </div>
    </div>
  );
};

export default Registration;
