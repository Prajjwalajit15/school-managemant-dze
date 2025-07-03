import React, { useState, useEffect } from 'react';
import { FaRocket } from 'react-icons/fa';  
import "./ScrollToTopButton.css"; 

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div
      className={`scroll-to-top ${visible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <FaRocket />
    </div>
  );
};

export default ScrollToTop;

