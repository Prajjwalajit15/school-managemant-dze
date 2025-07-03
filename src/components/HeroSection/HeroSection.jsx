import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to School Management DZE</h1>
        <p>Your partner in smart and efficient school operations.</p>
        <button onClick={() => navigate('/about')}>About Us</button>
      </div>
      <img
        src="https://media.istockphoto.com/id/1460057665/video/small-town-in-usa-school-building-with-recess-playground-aerial-in-autumn-golden-hour-light.jpg?s=640x640&k=20&c=2bX0XeU3LROQEYAsiZA6JRVX5guQnmkIEUuqfdw7-ys="
        alt="School"
      />
    </section>
  );
};

export default HeroSection;

