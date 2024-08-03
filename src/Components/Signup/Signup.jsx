import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/signup', formData);
      console.log(response.data);
      const { token } = response.data;
      localStorage.setItem('jwtToken', token);
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error('There was an error creating the user!', error);
    }
  };

  const handleLoginNavigation = () => {
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Firstname:</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter Firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />

        <label>Lastname:</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter Lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="male">MALE</option>
          <option value="female">FEMALE</option>
          <option value="others">Others</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>
      <button onClick={handleLoginNavigation}>Go to Login</button>
    </div>
  );
};

export default Signup;
