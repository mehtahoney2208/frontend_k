import React from "react";
import { useNavigate } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import "./css/Home1.css";
import logo from "./kk logo.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

import g1 from "./wireless.gif";
import g2 from "./plane.gif";
import g3 from "./glass.gif";
import g4 from "./bag.gif";
import g5 from "./laundary.gif";
import g6 from "./gym.gif";

export default function Home() {
  const navigate = useNavigate();
  const bookNow = () => {
    navigate("/bookingform");
  };

  return (
    <>
      <br></br>
      <div className="example-container">
        <img
          src={img4}
          alt="Example Image 1"
          className="example"
          style={{ height: "53rem" }}
        />
        <div className="text1">
          <h1
            className="overlay-text1"
            style={{ fontWeight: "bold", fontSize: "350%" }}
          >
            <b>Welcome to</b>{" "}
          </h1>
          <br></br>
          <h1 style={{ fontSize: "350%", fontWeight: "bold" }}>
            {" "}
            <b>Krave Kourt</b>{" "}
          </h1>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="containerS">
        <br />
        <h3 style={{textAlign:'center'}}><b>Most Popular Hotels</b></h3>
        <div className="row">
          <div className="col-md-4" style={{ paddingLeft: "6%" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Bora Bora" />
              <div className="card-body">
                <h5 className="card-title"> Bora Bora </h5>
                <p className="card-text">
                  Discover ultimate luxury and tranquility with overwater
                  bungalows, beachfront villas, and world-class amenities in the
                  heart of Bora Bora.
                </p>
                <p className="card-text">
                  <b>$700</b>
                </p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling1"
                  aria-controls="offcanvasScrolling1"
                >
                  Details <LuClipboardList className="icon " />
                </button>
                <br />
                <div
                  className="offcanvas offcanvas-start"
                  data-bs-scroll="true"
                  data-bs-backdrop="false"
                  tabIndex="-1"
                  id="offcanvasScrolling1"
                  aria-labelledby="offcanvasScrollingLabel1"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title"
                      id="offcanvasScrollingLabel1"
                    >
                      Services
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <p>
                      <b>Services we provide are:</b>
                      <br />
                      <br />
                      <b>Standard Rooms: </b> Comfortable, perfect for a
                      relaxing stay.
                      <br />
                      <b>Deluxe Rooms:</b> Spacious rooms with enhanced
                      amenities and stunning views.
                      <br />
                      <b>Suites:</b> Luxurious suites offering a separate living
                      area, premium furnishings, and exclusive services.
                      <br />
                      <br />
                      <b>Fitness Center:</b> Stay active during your stay with
                      our state-of-the-art gym facilities.
                      <br />
                      <b>Spa & Wellness:</b> Relax and rejuvenate with a variety
                      of treatments and therapies at our full-service spa.
                      <br />
                      <b>Swimming Pool:</b> Enjoy a refreshing dip in our
                      outdoor/indoor pool.
                      <br />
                      <b>Business Center:</b> Fully equipped with the latest
                      technology, ideal for business travelers.
                      <br />
                      <b>Event Spaces:</b> Versatile meeting and event spaces,
                      perfect for conferences, weddings, and special occasions.
                    </p>
                  </div>
                  <br />
                </div>
                <a href="#" className="btn btn-success" onClick={bookNow}>
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4" style={{ paddingLeft: "6%" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={img2}
                className="card-img-top"
                alt="New Zealand"
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-title"> New Zealand </h5>
                <p className="card-text">
                  Experience modern comfort and natural beauty at New Zealand
                  Serenity Hotel, offering luxurious rooms, gourmet dining, and
                  top-notch amenities.
                </p>
                <p className="card-text">
                  <b>$700</b>
                </p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling2"
                  aria-controls="offcanvasScrolling2"
                >
                  Details <LuClipboardList className="icon " />
                </button>
                <br />
                <div
                  className="offcanvas offcanvas-start"
                  data-bs-scroll="true"
                  data-bs-backdrop="false"
                  tabIndex="-1"
                  id="offcanvasScrolling2"
                  aria-labelledby="offcanvasScrollingLabel2"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title"
                      id="offcanvasScrollingLabel2"
                    >
                      Services
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <p>
                      <b>Services we provide are:</b>
                      <br />
                      <br />
                      <b>Standard Rooms:</b> Comfortable rooms designed for a
                      cozy stay.
                      <br />
                      <b>Superior Rooms:</b> Upscale rooms with better amenities
                      and enhanced features.
                      <br />
                      <b>Executive Suites:</b> Spacious suites with separate
                      living areas and premium furnishings.
                      <br />
                      <br />
                      <b>Restaurant:</b> Enjoy a variety of local and
                      international cuisines in our on-site restaurant.
                      <br />
                      <b>Bar & Lounge:</b> Relax with a drink in our
                      sophisticated bar and lounge area.
                      <br />
                      <b>Concierge Services:</b> Our dedicated concierge team is
                      available to assist with travel arrangements and special
                      requests.
                      <br />
                      <b>Free Wi-Fi:</b> Stay connected with complimentary
                      high-speed internet access throughout the hotel.
                    </p>
                  </div>
                  <br />
                </div>
                <a href="#" className="btn btn-success" onClick={bookNow}>
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4" style={{ paddingLeft: "6%" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={img3}
                className="card-img-top"
                alt="Hawaii"
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-title"> Hawaii </h5>
                <p className="card-text">
                  Embrace the spirit of Aloha at Hawaii Bliss Resort, where lush
                  landscapes meet luxurious accommodations and world-class
                  amenities.
                </p>
                <p className="card-text">
                  <b>$700</b>
                </p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling3"
                  aria-controls="offcanvasScrolling3"
                >
                  Details <LuClipboardList className="icon " />
                </button>
                <br />
                <div
                  className="offcanvas offcanvas-start"
                  data-bs-scroll="true"
                  data-bs-backdrop="false"
                  tabIndex="-1"
                  id="offcanvasScrolling3"
                  aria-labelledby="offcanvasScrollingLabel3"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title"
                      id="offcanvasScrollingLabel3"
                    >
                      Services
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <p>
                      <b>Services we provide are:</b>
                      <br />
                      <br />
                      <b>Oceanfront Rooms:</b> Rooms with breathtaking ocean
                      views and luxurious amenities.
                      <br />
                      <b>Private Villas:</b> Exclusive villas with private pools
                      and personalized services.
                      <br />
                      <b>Luxury Suites:</b> Spacious suites with high-end
                      furnishings and panoramic views.
                      <br />
                      <br />
                      <b>Infinity Pool:</b> Relax by our infinity pool with
                      stunning ocean views.
                      <br />
                      <b>Spa & Wellness Center:</b> Indulge in rejuvenating
                      treatments and therapies.
                      <br />
                      <b>Water Sports:</b> Enjoy various water sports activities
                      including snorkeling and kayaking.
                      <br />
                      <b>Fine Dining:</b> Experience gourmet dining with fresh
                      local ingredients and exquisite flavors.
                    </p>
                  </div>
                  <br />
                </div>
                <a href="#" className="btn btn-success" onClick={bookNow}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerS" style={{ paddingTop: "5%" }}>
        <h1 style={{ textAlign: "center" }}>
          <b> OUR FACILITIES</b>
        </h1>
        <br />
        <div className="row">
          <div className="col-md-4" style={{ paddingLeft: "6%" }}>
            <div className="card" style={{ width: "18rem", height: "22rem" }}>
              <img src={g1} className="card-img-top" alt="Bora Bora" />
              <div className="card-body">
                <h5 className="card-title">
                  <b>WIRELESS INTERNET</b>
                </h5>
                <p className="card-text">
                  Be connected at all times in your suites, the restaurants, the
                  lobby etc, with our Wi-Fi connectivity.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4" style={{ paddingLeft: "6%" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={g2}
                className="card-img-top"
                alt="New Zealand"
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  <b>TRAVEL DESK</b>{" "}
                </h5>
                <p className="card-text">
                  We offer airport transfers as well as chauffeured Toyota
                  Innovas, that cater to your travel requirements at your
                  behest.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4" style={{ paddingLeft: "6%" }}>
            <div className="card" style={{ width: "18rem", height: "22rem" }}>
              <img
                src={g3}
                className="card-img-top"
                alt="Hawaii"
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  <b> PERSONAL BAR </b>{" "}
                </h5>
                <p className="card-text">
                  A well stocked bar with a wide assortment of choices in each
                  room.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-md-4"
            style={{ paddingLeft: "6%", paddingTop: "5%" }}
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={g4}
                className="card-img-top"
                alt="Hawaii"
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  <b> BUSINESS CENTER </b>{" "}
                </h5>
                <p className="card-text">
                  The Business Center at The Paul Bangalore offers comprehensive
                  personal and business facilities with a well facilitated
                  environment
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-md-4"
            style={{ paddingLeft: "6%", paddingTop: "5%" }}
          >
            <div className="card" style={{ width: "18rem", height: "22rem" }}>
              <img
                src={g5}
                className="card-img-top"
                alt="Hawaii"
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  <b>LAUNDRY</b>{" "}
                </h5>
                <p className="card-text">
                  Efficient and speedy laundry services that enhance your stay
                  with the comforts of being at home.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-md-4"
            style={{ paddingLeft: "6%", paddingTop: "5%" }}
          >
            <div className="card" style={{ width: "18rem", height: "22rem" }}>
              <img
                src={g6}
                className="card-img-top"
                alt="Hawaii"
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  <b>FITNESS CENTRE </b>{" "}
                </h5>
                <p className="card-text">
                  We provide best Fitness centre for our customer . It provides
                  all types of fitness components
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PROGRSS BAR */}
      <div className="containerP" style={{ paddingBottom: "1%" }}>
        <div className="row" style={{ backgroundColor: "lightgrey" }}>
          <div
            className="col-md-6"
            style={{ paddingTop: "5%", paddingLeft: "5%", paddingBottom: "5%" }}
          >
            <img src={logo} className="img-fluid" alt="" />
          </div>
          <div
            className="col-md-6"
            style={{
              paddingTop: "5%",
              paddingRight: "6%",
              paddingBottom: "4%",
            }}
          >
            {/* booking progress */}
            <b>BOOKING PROGRESS</b>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "90%" }}
              >
                90%
              </div>
            </div>
            <br></br>

            {/* room availabilities */}
            <b>ROOM AVAILABILITIES</b>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "95%" }}
              >
                95%
              </div>
            </div>
            <br></br>

            {/* amenities */}
            <b>AMENITIES</b>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info "
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
            <br></br>

            {/* loyalty */}
            <b>LOYALTY</b>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
            <br></br>

            {/* customization and branding */}
            <b>CUSTOMIZATION AND BRANDING</b>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
            <br></br>
          </div>
          <br></br>
        </div>
      </div>
      <footer className="bg-info text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img
                src={img2}
                alt="Scrapvala Logo"
                className="img-fluid1 mb-3"
              />
              <p>
                Experience the best in hospitality with our handpicked selection
                of hotels. Whether you're traveling for business or leisure, we
                provide a seamless booking experience with unbeatable rates and
                exceptional customer service.{" "}
              </p>
              <h5>Follow Us On:</h5>
              <div className="gap-2 d-md-flex d-icons">
                <FiFacebook className="icon " />
                <FaInstagram className="icon " />
                <FaYoutube className="icon " />
              </div>
            </div>
            <div className="col-md-3">
              <h5>OUR AGENCY</h5>
              <ul className="list-unstyled">
                <li>Services</li>
                <li>Insurance</li>
                <li>HostelWorld</li>
                <li>Trivago</li>
                <li>TripAdvisor</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>COMPANY</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Packages</li>
                <li>About Us</li>
                <li>Reach Us</li>
                <li>Search</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email Address"
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Phone Number"
                  />
                  <textarea
                    className="form-control mb-2"
                    placeholder="Share your requirements here...."
                  ></textarea>
                  <br></br>
                  <button type="submit" className="btn btn-success">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Krave Kourt All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}