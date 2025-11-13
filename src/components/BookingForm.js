import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roomType: "",
    numberOfGuests: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/book/bookings",
        formData
      );
      const data = await response.data;
      alert("Booking successfully");
      console.log(data);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        roomType: "",
        numberOfGuests: "",
        specialRequests: "",
      });
    } catch (err) {
      console.log(err);
    }

    // try {
    //   const response = await fetch('http://localhost:5000/api/book/bookings', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "cadetblue" }}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Room Type:</label>
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
        >
          <option value="">Please Select</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
      </div>
      <div>
        <label>Number of Guests:</label>
        <input
          type="number"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Special Requests:</label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default BookingForm;
