import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">School Management DZE</div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/programs">Our Programs</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
