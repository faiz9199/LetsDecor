import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo1.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <RouterLink to="/" className="logo">
          <img src={logo} alt="logo" />
        </RouterLink>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
          <RouterLink to="/" onClick={closeMenu}>
              Home
            </RouterLink>
          </li>
          <li className="nav-item">
          <Link to="services" onClick={closeMenu} spy={true} smooth={true} offset={-80} duration={1000}>
              Services
            </Link>
          </li>
          <li className="nav-item">
          <Link to="about" onClick={closeMenu} spy={true} smooth={true} offset={-80} duration={1000}>
              About
            </Link>
          </li>
          <li className="nav-item">
          <Link to="testimonials" onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={1000}>
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <RouterLink to="/contact" onClick={closeMenu}>
              Contact
            </RouterLink>
          </li>
          <li className="nav-item">
            <RouterLink to="/works" onClick={closeMenu}>
              Our Works
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
