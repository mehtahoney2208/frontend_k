import React from 'react';
import logo from "./Ab.jpg";
import hotelImage from "./hotel1.jpeg";
import teamImage from "./Team.jpeg";
import "./css/AboutUs.css";

function AboutUs() {
  return (
    <div className="container mt-5">
      <h2 className="custom-font">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={logo} className="img-fluid hover-effect" alt="Our Logo" style={{border:'2px solid black'}} />
        </div>
        <div className="col-md-6">
          <p className="custom-font">
            Welcome to our hotel! Nestled in the heart of the city, our hotel offers a perfect blend of luxury and comfort. We are dedicated to providing you with an unforgettable experience, whether you are here for business or leisure. 
          </p>
          <p className="custom-font">
            Our team of professionals is committed to delivering exceptional service and ensuring your stay is as enjoyable as possible. With years of experience in the hospitality industry, we have built a reputation for excellence and reliability.
          </p>
          <p className="custom-font">
            Thank you for choosing our hotel. We look forward to welcoming you and making your stay memorable.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <p className="custom-font">
            Welcome to Krave Kourt. Our hotel is more than just a place to stay—it's a destination designed to provide you with an exceptional experience, whether you're visiting for business or leisure. At Krave Kourt, we pride ourselves on our warm hospitality and attention to detail. From the moment you step through our doors, you'll be greeted by our friendly and professional staff, dedicated to making your stay as enjoyable and comfortable as possible. Our beautifully designed rooms, state-of-the-art amenities, and exquisite dining options are just a few of the reasons why guests return to us time and time again.
          </p>
        </div>
        <div className="col-md-6">
          <img src={hotelImage} className="img-fluid hover-effect" alt="Our Hotel" style={{border:'2px solid black'}} />
        </div>
      </div>
      <div className="row mt-5">
      <div className="col-md-6">
          <img src={teamImage} className="img-fluid hover-effect" alt="Our Team" style={{border:'2px solid black'}}/>
        </div>
        <div className="col-md-6">
          <h4 className="custom-font"><b>Our Story</b></h4>
          <p className="custom-font">
            Founded in 2000, our hotel has grown from a small boutique establishment to one of the most recognized names in the hospitality industry. Our journey is one of passion, dedication, and a relentless pursuit of excellence.
          </p>
          <p className="custom-font">
            We believe in creating a home away from home for our guests, where every detail is thoughtfully designed to enhance your stay.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4" style={{paddingLeft:'8%'}}>
          <h4 className="custom-font"><b>Our Vision</b></h4>
          <p className="custom-font" style={{color:'darkblue'}}>
            To be the leading company in our industry, known for our innovative solutions, customer satisfaction, and commitment to quality.
          </p>
        </div>
        <div className="col-md-4" style={{paddingLeft:'10%'}}>
          <h4 className="custom-font" ><b>Our Mission</b></h4>
          <p className="custom-font" style={{color:'darkblue'}}>
            To provide exceptional services that meet our clients' needs and exceed their expectations, through innovation, teamwork, and dedication.
          </p>
        </div>
        <div className="col-md-4" style={{paddingLeft:'15%'}}>
          <h4 className="custom-font"><b>Our Values</b></h4>
          <ul className="custom-font"style={{color:'darkblue'}}>
            <li style={{color:'darkblue'}}>Integrity</li>
            <li style={{color:'darkblue'}}>Customer Focus</li>
            <li style={{color:'darkblue'}}>Innovation</li>
            <li style={{color:'darkblue'}}>Excellence</li>
            <li style={{color:'darkblue'}}>Teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

