import React, { useEffect, useState } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import './Termsandconditions.css';

const Termsandconditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleApplyClick = () => {
    if (isChecked) {
      alert('Application submitted!'); // Replace with your apply logic
    } else {
      alert('Please accept the terms and conditions to proceed.');
    }
  };

  return (
    <div className="terms-container" data-aos="fade-up">
      <h1>Terms and Conditions</h1>
      <ul className="terms-list">
      <li><strong>Policy Coverage</strong>
            <ul>
              <li>Coverage details are outlined in the policy document.</li>
              <li>The policyholder must review and understand the coverage limits and exclusions.</li>
            </ul>
          </li>
          <li><strong>Premium Payments</strong>
            <ul>
              <li>Premiums must be paid on time to keep the policy active.</li>
              <li>Failure to pay premiums may result in policy cancellation or suspension.</li>
            </ul>
          </li>
          <li><strong>Claim Process</strong>
            <ul>
              <li>All claims must be reported promptly as per the guidelines provided.</li>
              <li>Required documentation must be submitted for claim processing.</li>
            </ul>
          </li>
          <li><strong>Exclusions</strong>
            <ul>
              <li>Certain conditions and events are excluded from coverage, such as pre-existing conditions or intentional damage.</li>
              <li>A detailed list of exclusions can be found in the policy document.</li>
            </ul>
          </li>
          <li><strong>Policy Renewal</strong>
            <ul>
              <li>Policies may be subject to renewal at the end of the term.</li>
              <li>Renewal terms and conditions will be communicated prior to the renewal date.</li>
            </ul>
          </li>
          <li><strong>Cancellation</strong>
            <ul>
              <li>Policyholders may cancel their policy at any time by providing written notice.</li>
              <li>Cancellation terms and any applicable refunds are detailed in the policy document.</li>
            </ul>
          </li>
          <li><strong>Changes to Policy</strong>
            <ul>
              <li>Any changes to the policy must be requested in writing and approved by the insurer.</li>
              <li>Changes may affect the premium and coverage details.</li>
            </ul>
          </li>
          <li><strong>Grace Period</strong>
            <ul>
              <li>A grace period for premium payments may be provided, during which the policy remains active.</li>
              <li>The length of the grace period is specified in the policy document.</li>
            </ul>
          </li>
          <li><strong>Dispute Resolution</strong>
            <ul>
              <li>Disputes regarding the policy are subject to arbitration or mediation as specified.</li>
              <li>Policyholders are encouraged to contact customer service for resolution of any issues.</li>
            </ul>
          </li>
          <li><strong>Privacy and Data Protection</strong>
            <ul>
              <li>Personal information collected for the policy is used in accordance with our privacy policy.</li>
              <li>Data protection measures are in place to safeguard policyholder information.</li>
            </ul>
          </li>
          <li><strong>Compliance with Laws</strong>
            <ul>
              <li>The policy is governed by the laws of the jurisdiction in which it is issued.</li>
              <li>Policyholders must comply with all applicable laws and regulations.</li>
            </ul>
          </li>
          <li><strong>Responsibilities of the Policyholder</strong>
            <ul>
              <li>Provide accurate information when applying for the policy.</li>
              <li>Inform the insurer of any significant changes that may affect coverage.</li>
            </ul>
          </li>
          <li><strong>Limitations of Liability</strong>
            <ul>
              <li>The insurer’s liability is limited to the terms and coverage outlined in the policy.</li>
              <li>The insurer is not liable for indirect or consequential damages unless specified.</li>
            </ul>
          </li>
      </ul>
      <div className="apply-section">
        <label className="accept-checkbox">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          I accept the terms and conditions
        </label>
        <button className="apply-button" onClick={handleApplyClick}>Apply</button>
      </div>
    </div>
  );
};

export default Termsandconditions;
