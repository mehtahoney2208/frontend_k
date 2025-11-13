import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./KK.png"; // Ensure the logo path is correct
import { BsThreeDotsVertical } from "react-icons/bs";
import "./css/Navbar1.css";

export default function Navbar() {
  const [active, setActive] = useState("navBar");
  const [isLogin, setIsLogin] = useState(false)

  // function to toggle navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const navigate = useNavigate();
  const SignUpRequest = () => {
    navigate("/signup");
  };


  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  }, [navigate])

  function handleLogout(){
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <img src={logo} alt="Krave Kourt Logo" />
            <h1>Krave Kourt</h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/package" className="navLink">
                Packages
              </Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="navLink">
                About Us
              </Link>
            </li>
            <li className="navItem">
              <Link to="/Reach" className="navLink">
                Reach Us
              </Link>
            </li>
            <li className="navItem">
            {!isLogin &&
              <Link to="/login" className="navLink">
                Login
              </Link>
            }
            </li>

            <button className="btn">
              <a href="/package">Book Now</a>
            </button>
            {!isLogin && 
            <button type="button" className="btn flex" onClick={SignUpRequest}>
              Sign Up
            </button>
            }
            {isLogin && 
            <button className="btn flex ms-2" onClick={handleLogout}>Logout</button>
            }

            <div onClick={showNav} className="toggleNavbar">
              <BsThreeDotsVertical className="icon" />
            </div>
          </ul>
        </div>
      </header>
    </section>
  );
}
