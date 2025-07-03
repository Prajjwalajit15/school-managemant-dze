import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <img
        src="https://media.istockphoto.com/id/1460057665/video/small-town-in-usa-school-building-with-recess-playground-aerial-in-autumn-golden-hour-light.jpg?s=640x640&k=20&c=2bX0XeU3LROQEYAsiZA6JRVX5guQnmkIEUuqfdw7-ys="
        alt="About School"
      />
      <div className="about-text">
        <h2>About School Management DZE</h2>
        <p>We help schools manage everything digitally — from academics to admin tasks.</p>
      </div>
    </div>
  );
};

export default About;
