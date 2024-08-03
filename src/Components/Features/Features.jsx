import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <>
      <div className="features-container">
        <h1>Our Unique Features!</h1>
        <hr />
        <div className="features-wrapper" data-aos="fade-up">
          <div className="features-box borrower-box">
            <h2>Borrower</h2>
            <hr />
            <ul>
              <li>Financing Invoice</li>
              <li>Info on Govt Schemes</li>
              <li>Virtual Augmentation Services</li>
              <li>Digital Services</li>
              <li>24/7 Customer Service</li>
              <li>High Security</li>
              <li>Networking & Knowledge Form</li>
              <li>Insurance</li>
              <li>Cash Flow Analysis</li>
              <li>
                <button className="feature-button">Register Now!</button>
              </li>
            </ul>
          </div>
          <div className="features-box investor-box">
            <h2>Investor</h2>
            <hr />
            <ul>
              <li>Financing Invoice</li>
              <li>Info on Govt Schemes</li>
              <li>Virtual Augmentation Services</li>
              <li>Digital Services</li>
              <li>24/7 Customer Service</li>
              <li>High Security</li>
              <li>Networking & Knowledge Form</li>
              <li>Insurance</li>
              <li>Cash Flow Analysis</li>
              <li>
                <button className="feature-button">Register Now!</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
