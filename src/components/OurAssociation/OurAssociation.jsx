import React from 'react';
import './OurAssociation.css';

const OurAssociation = () => {
  return (
    <section className="association">
      <h2>Our Association</h2>
      <p>We are proudly associated with leading educational institutions and boards to deliver smart, efficient, and trusted school solutions.</p>
      
      <div className="association-logos">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLHO0eBLsAHzFAVY1pywZenhMJilRzgniOQ&s" alt="CBSE" />
        <img src="https://play-lh.googleusercontent.com/QRYJ385vbnSO4WiVP3_wMTUMlUgVdbVqFJQP2JzM82Z1i-WgL7n01wJqUXl5aohBa6Q=w600-h300-pc0xffffff-pd" alt="ICSE" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTARABWx8VIGZdsC6aNGzw3uFhQvB5FBfR6Hg&s" alt="AICTE" />
        <img src="https://1000logos.net/wp-content/uploads/2019/03/NIOS-emblem.jpg" alt="NIOS" />
      </div>
    </section>
  );
};

export default OurAssociation;
