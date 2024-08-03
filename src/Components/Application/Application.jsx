import React, { useState } from 'react';
import './Application.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Application = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    aadharNumber: '',
    photograph: null,
    contact: '',
    email: '',
    occupation: '',
    sourceOfFunds: '',
    signature: null,
    kycDocuments: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/application', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      if (response.status === 200) {
        navigate('/report')
      }
    } catch (error) {
      console.error('There was an error creating the user!', error);
    }
  };
  const handleLoginNavigation = () => {
    navigate('/report');
  };

  return (
    <form onSubmit={handleSubmit} className="kyc-form">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Age/Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Identification Number:</label>
        <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Photograph:</label>
        <input type="file" name="photograph" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Contact Information:</label>
        <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Occupation:</label>
        <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Source of Funds:</label>
        <input type="text" name="sourceOfFunds" value={formData.sourceOfFunds} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Signature:</label>
        <input type="file" name="signature" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>KYC Documents:</label>
        <input type="file" name="kycDocuments" onChange={handleChange} required />
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    
    <div className="Reg-btn-container">
    <button className="Reg-btn" onClick={handleLoginNavigation}>Report</button>
  </div>
  </form>
  );
};

export default Application;
