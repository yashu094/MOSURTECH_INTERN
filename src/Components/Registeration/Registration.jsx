import React from 'react'
import './Registration.css'

const Registration = () => {
  return (
    <div className="Reg-container">
            <h2 className="Reg-head">Registration</h2>
            <form className='Reg-form'>
                <label className='Reg-label' For="firstName">Name :</label>
                <input className='Reg-input' type="text" id="Name" name="Name" placeholder='Enter Name' required/>

                <label className='Reg-label' For="Age">Age :</label>
                <input className='Reg-input' type="number" id="Age" name="Age"  placeholder='Enter Age' required/>

                <label className='Reg-label' For="Number">Aadhar Number:</label>
                <input className='Reg-input' type="number" id="number" name="number" placeholder='Enter Number' required/>

                <label className='Reg-label' For="Occupation">Occupation :</label>
                <input className='Reg-input' type="text" id="Name" name="Name" required placeholder='Enter '/>

                <label className='Reg-label' For="Annual Income">Annual Income :</label>
                <input className='Reg-input' type="number" id="number" name="number" required placeholder='Enter Income'/>

                <label className='Reg-label' For="Monthly Inhand Salary">Monthly Inhand Salary:</label>
                <input className='Reg-input' type="number" id="number" name="number" required placeholder='Enter Salary'/>

                <label className='Reg-label' For="firstName">Number of Bank Accounts:</label>
                <input className='Reg-input' type="number" id="number" name="number" required placeholder='Enter Accounts'/>
                
                <label className='Reg-label' For="firstName">Outstanding debt :</label>
                <input className='Reg-input' type="number" id="number" name="number" required placeholder='Enter Debt'/>

                <label className='Reg-label' For="firstName">Number of credit cards:</label>
                <input className='Reg-input' type="number" id="number" name="number" required placeholder='Enter Credit cards'/>

                <label className='Reg-label' For="firstName">Interest Rate:</label>
                <input className='Reg-input' type="number" id="number" name="number" required placeholder='Enter Interest rate '/>

                <label className='Reg-label' For="firstName">Number of Loans:</label>
                <input className='Reg-input' type="number" id="number" name="number" required placeholder='Enter Loans'/>

                <label className='Reg-label' For="firstName">Type of loan :</label>
                <input className='Reg-input' type="text" id="Name" name="Name" required placeholder='Enter Type'/>

                <label className='Reg-label' For="firstName">Total EMI's per Month :</label>
                <input className='Reg-input' type="number" id="number" name="number" required placeholder='Enter EMIs'/>

                <label className='Reg-label' For="firstName">Amount invested Monthly:</label>
                <input className='Reg-input' type="number" id="Name" name="Name" required placeholder='Enter Amount'/>

                <button className='Reg-btn' type="submit">Register</button>
            </form>
        </div>
  )
}

export default Registration
