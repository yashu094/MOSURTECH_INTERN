import React from 'react'
import './Blogin.css'
const Blogin = () => {
  return (
    <>
    <div className="Bor-container">
            <h2 className='Bor-head'>Borrower Registration</h2>
            <form className='Bor-form'>
                <label className='Bor-label' For="firstName">First Name</label>
                <input className='Bor-input' type="text" id="BfirstName" name="firstName" required />

                <label className='Bor-label' For="lastName">Last Name</label>
                <input className='Bor-input' type="text" id="BlastName" name="lastName" required />

                <label  className='Bor-label' For="email">Email</label>
                <input className='Bor-input' type="email" id="Bemail" name="email" required />

                <label className='Bor-label' For="password">Password</label>
                <input className='Bor-input' type="password" id="Bpassword" name="password" required />

                <button className='Bor-btn' type="submit">Register</button>
            </form>
        </div>
    </>
  );
}

export default Blogin
