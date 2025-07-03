import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSchool } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <FaSchool className="logo-icon" />
          <span className="logo-text">School Management DZE</span>
        </div>
        <div className="menu-icon" onClick={toggleNav} aria-label="Toggle navigation">
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul onClick={closeNav}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/programs">Our Programs</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

