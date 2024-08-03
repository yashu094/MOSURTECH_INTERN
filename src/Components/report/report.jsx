import React, { useState } from 'react';
import axios from 'axios';
import './report.css'

const RetrieveScore = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [scoreData, setScoreData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setScoreData(null);
    
    try {
      const response = await axios.get(`http://127.0.0.1:8000/retrieveScore?aadharNumber=${aadharNumber}`);
      setScoreData(response.data);
    } catch (error) {
      setError(error.response ? error.response.data : 'Error retrieving score');
    }
  };

  return (
    <div className="retrieve-score">
      <h1>Retrieve Predicted Credit Score</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Aadhar Number:</label>
          <input 
            type="text" 
            value={aadharNumber} 
            onChange={(e) => setAadharNumber(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Get Score</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error.message || JSON.stringify(error)}</p>}
      {scoreData && (
        <div>
          <p>Name: {scoreData.name}</p>
          <p>Date of Birth: {scoreData.dob}</p>
          <p>Address: {scoreData.address}</p>
          <p>Aadhar Number: {scoreData.aadharNumber}</p>
          <p>Contact: {scoreData.contact}</p>
          <p>Predicted Credit Score: {scoreData.Predicted_Credit_Score}</p>
          <p>Verification_status: {scoreData.verification_status}</p>
        </div>
      )}
    </div>
  );
};

export default RetrieveScore;
