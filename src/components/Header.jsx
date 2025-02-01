import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/header.css";
import "../Style/services.css";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h1>SHIRASAA EVENTS</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/"  className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about"  className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/services"  className="nav-link">Services</Link>
          </li>
          <li>
            <Link to="/gallery"  className="nav-link">Gallery</Link>
          </li>
          <li>
            <Link to="/contact"  className="nav-link">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
