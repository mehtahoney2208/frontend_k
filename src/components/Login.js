import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    console.log(formData)

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/user/login', formData);
      console.log('Login Response:', response);
     
      if (response.status == 200) {
        setSuccess('Login successful!');
        const token = response.data.token;
        localStorage.setItem('token', token)
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setError(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login Error:', error);  // Log the entire error object
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="login">
            <form onSubmit={handleSubmit}>
              <h1>LOG IN</h1>
              {success && (
                <div className="alert alert-success" role="alert">
                  {success}
                </div>
              )}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                autoComplete='email'
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                autoComplete="current-password"
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
