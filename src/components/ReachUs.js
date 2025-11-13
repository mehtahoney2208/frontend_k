import React, { useState } from 'react';
import axios from 'axios';

export default function ReachUs() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setSuccessMessage('Contact form submitted successfully!');
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
    } catch (error) {
      console.error(error);
      setErrorMessage('Error submitting contact form.');
      setSuccessMessage('');
    }
  };

  return (
    <>
      <h2 style={{ paddingLeft: '10%', fontFamily: 'elephant', paddingTop: '2%' }}>Contact Us</h2>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6" style={{ backgroundColor: 'lightskyblue' }}>
            <br />
            <h3>Please Fill Out This Form..</h3>
            <form onSubmit={handleSubmit}>
              {/* FULLNAME */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>


              {/* PHONE NUMBER */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* ADDRESS */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                  className="form-control"
                  id="address"
                  rows="2"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              <br />
              <button type="submit" className="btn btn-dark">Submit</button>
              <br />
            </form>
            {successMessage && (
              <div className="alert alert-success mt-3 text-center">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger mt-3 text-center">
                {errorMessage}
              </div>
            )}
            <br />
          </div>
          
          <div className="col-md-6" style={{ paddingLeft: '5%' }}>
            <h3><b>REACH US</b></h3>
            <br />
            <br />
            <p>For more details you can contact us or make a call to us anytime. We are available for 24*7 and all days in a week. We have a specialized customer support team that will guide you appropriately.</p>
            <br />
            <p>Owner : ----------------</p>
            <p>Contact : ***** ******</p>
            <p>Address:
              Techmicra IT Solutions<br />
              Ambawadi, Ahmedabad, Gujarat 380015<br />
              <br />
              <i className="bi bi-telephone-forward"></i> : 123456789
            </p>
          </div>
        </div>
      </div>
      <br></br>
       <br></br>
      <div className="row2">
        <div className="col-md-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0359850929185!2d72.54554997430175!3d23.022450916334584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4853c0001%3A0xcaaf3422be95a142!2sTechmicra%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1719997457368!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}





