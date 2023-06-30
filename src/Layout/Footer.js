import React from "react";
import "../CSS/Footer.css";
import footer_logo from "../Assets/footer-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-left" data-aos="fade-right" data-aos-delay="100">
        <div className="footer-left-div" >
          <img src={footer_logo} className="footer-logo"></img>
          <h3>Og Social</h3>
        </div>
        <p className="footer-content">"the social network Venture"</p>
      </div>
      <div className="footer-right-two" data-aos="zoom-in" data-aos-delay="100">
        <h3>Newsletter</h3>
        <div className="gap_10">
          <input
            type="text"
            placeholder="Your Mail"
            className="newsletter-input"
          />
          <button className="newsletter-btn">Submit</button>
        </div>
      </div>
      <div className="footer-right" data-aos="fade-left" data-aos-delay="100">
        <h3>Quick Links</h3>
        <ul>
          <Link to="/" className="links">
            <li> Home
            </li></Link>
          <Link to="/services" className="links"><li>Services </li></Link>
          <Link to="/about" className="links"><li>About </li></Link>
          <Link to="/blog" className="links"><li>Blog </li></Link>
          <Link to="/contact" className="links"><li>Contact </li></Link >
        </ul >
      </div >
    </div >
  );
}
export default Footer;
