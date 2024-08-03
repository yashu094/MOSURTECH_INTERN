import React from 'react'
import './Llogin.css'
const Llogin = () => {
  return (
    <>
    <div className="Lend-container">
            <h2 className="Lend-head">Lender Registration</h2>
            <form className='Lend-form'>
                <label className='Lendlabel' For="firstName">FirstName</label>
                <input className='Lendinput' type="text" id="LfirstName" name="firstName" required />

                <label className='Lendlabel' For="lastName">LastName</label>
                <input className='Lendinput' type="text" id="llastName" name="lastName" required />

                <label className='Lendlabel'For="email">Email</label>
                <input className='Lendinput' type="email" id="Lemail" name="email" required />

                <label className='Lendlabel' For="password">Password</label>
                <input className='Lendinput' type="password" id="Lpassword" name="password" required />

                <button className='Lend-btn' type="submit">Register</button>
            </form>
        </div>
    </>
  );
}

export default Llogin
