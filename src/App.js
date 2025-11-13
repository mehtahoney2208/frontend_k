import "./App.css";
import Navbar from "./components/Navbar.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import ReachUs from "./components/ReachUs.js";
import AboutUs from "./components/AboutUs.js";
import SignUp from "./components/SignUp";
import BookingForm from "./components/BookingForm.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Package from "./components/Package.js";
import AddProduct from "./components/AddProduct";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/reach" element={<ReachUs/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/package" element={<Package/>}></Route>
        <Route path="/bookingform" element={<BookingForm/>}></Route>
        <Route path="/addproduct" element={<AddProduct />} /> 
        </Routes>
      </Router>
    </>
  );
}
