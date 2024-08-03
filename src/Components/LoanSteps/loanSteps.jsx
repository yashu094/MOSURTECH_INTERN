// LoanSteps.js
import React,{useEffect} from 'react';
import './loanSteps.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LoanSteps = () => {
    useEffect(()=>{
        AOS.init({duration: 2000,})},[]);
  return (
    <div className="loan-steps-container" data-aos="fade-up">
      <h1 className="section-title">How to get instant Loan</h1>
      <p className="subtitle">#One Time Membership. Lifetime no Hardships! ™</p>
      <div className="steps-grid">
        <div className="step">
          <div className="step-number">Step 1</div>
          <div className="step-icon">📱</div>
          <h2>Apply online</h2>
          <p>Register digitally (online) – share info about yourself, what you do, etc – <strong>Need it.</strong></p>
        </div>
        <div className="step">
          <div className="step-number">Step 2</div>
          <div className="step-icon">📄❌</div>
          <h2>Upload documents</h2>
          <p>Upload genuine & clear docs (pdf) – KYC, Bank statement, etc</p>
        </div>
        <div className="step">
          <div className="step-number">Step 3</div>
          <div className="step-icon">🤖</div>
          <h2>Declare accurately</h2>
          <p>Honesty pays dividends – We respect your status & your privacy</p>
        </div>
        <div className="step">
          <div className="step-number">Step 4</div>
          <div className="step-icon">📝❌</div>
          <h2>Digital Consent</h2>
          <p>Accept loan terms</p>
        </div>
        <div className="step">
          <div className="step-number">Step 5</div>
          <div className="step-icon">✔️</div>
          <h2>Instant Approval</h2>
          <p>Relax & carry your work – LOBOT™ will quickly turn around & get you instant loan credited to your designated bank account via our investors / lenders – <strong>Get it!</strong></p>
        </div>
        <div className="step">
          <div className="step-number">Step 6</div>
          <div className="step-icon">💸</div>
          <h2>Quick Disbursal</h2>
          <p>On time. Any time – repay your loan on time & keep drawing money anytime (24x7) – just one click</p>
        </div>
        <div className="step">
          <div className="step-number">Step 7</div>
          <div className="step-icon">🏅</div>
          <h2>Lifetime Membership</h2>
          <p>No more application for loan anytime for your lifetime. Just one click, draw down your loan, anytime from anywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default LoanSteps;
