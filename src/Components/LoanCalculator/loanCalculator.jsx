import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './loanCalculator.css';

const LoanCalculator = () => {
  const [loanType, setLoanType] = useState('Personal Loan');
  const [principal, setPrincipal] = useState('');
  const [tenure, setTenure] = useState('');
  const [totalPayable, setTotalPayable] = useState(null);

  useEffect(()=>{
    AOS.init({duration: 2000,})},[]);

  const interestRates = {
    'Personal Loan': 0.10,
    'SME Loan': 0.08,
    'Education Loan': 0.05,
    'Career Loan': 0.07,
  };

  const calculateTotalPayable = () => {
    const rate = interestRates[loanType];
    const total = principal * (1 + rate * tenure);
    setTotalPayable(total.toFixed(2));
  };

  return (
    <>
      <div className="heading-container" data-aos="fade-up">
        <h2 className="calculator-heading">Loan Calculator</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="loan-calculator" data-aos="fade-up">
        <div className="form-group">
          <label htmlFor="loanType">Choose Your Loan Type</label>
          <select
            id="loanType"
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
          >
            <option value="Personal Loan">Personal Loan</option>
            <option value="SME Loan">SME Loan</option>
            <option value="Education Loan">Education Loan</option>
            <option value="Career Loan">Career Loan</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="principal">Principal Amount</label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tenure">Loan Tenure (years)</label>
          <input
            type="number"
            id="tenure"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </div>
        <button onClick={calculateTotalPayable}>Calculate</button>
        {totalPayable && (
          <div>
            <h3>Total Payable Amount: {totalPayable}</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default LoanCalculator;
