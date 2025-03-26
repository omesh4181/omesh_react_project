import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Wonder's Travel</Link>
      <ul className="nav-links">
        <li><Link to="/" className="active">Travel</Link></li>
        <li><Link to="/#places">Places to Visit</Link></li>
        <li><Link to="#ContentSection">Content</Link></li>
        <li><Link to="/#about">About Us</Link></li>
      </ul>
      <Link to="/home">
        <button className="booking1">
          <i className="bx bxs-plane-alt"></i> Guest Mode
        </button>
      </Link>
      <Link to="/login">
        <button className="booking">
          <i className="bx bxs-plane-alt"></i> Bookings
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
