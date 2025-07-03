import React from 'react';
import './CTASection.css';

const CTASection = () => (
  <section className="cta">
    <h2>Ready to streamline your school?</h2>
    <p>Join School Management DZE today and simplify everything!</p>
    <form>
      <input type="email" placeholder="Your Email" required />
      <button type="submit">Apply Now</button>
    </form>
  </section>
);

export default CTASection;
