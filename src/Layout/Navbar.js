import React, { useState } from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = document.querySelectorAll(".nav-items > a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navMenu = document.querySelector(".nav-items");
      navMenu.classList.remove("open");
      setIsOpen(false);
    });
  });

  return (
    <div className="Navbar">
      <div className=" nav-top-flex">
        <div>
          <Link to="/home">
            <img src={logo} className="nav-logo"></img>
          </Link>
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/">Home</Link>
          <Link to="/services">OG Social</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
