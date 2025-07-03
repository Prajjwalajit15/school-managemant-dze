import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer"  id="footer">
    <div className="footer-brand">
      <h3>School Management DZE</h3>
      <p>123 Education Street,<br />Learning City, India</p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Our Programs</a></li>
      </ul>
    </div>

    <div className="footer-social">
      <h4>Connect with Us</h4>
      <div className="social-icons">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;
