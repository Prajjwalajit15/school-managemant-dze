import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ImageSection from './components/ImageSection/ImageSection';
import VisionMission from './components/VisionMission/VisionMission';
import OurPrograms from './components/OurPrograms/OurPrograms';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';
import About from './components/pages/About';
import OurAssociation from './components/OurAssociation/OurAssociation';
import Admissions from './components/links/Admissions';
import Contact from './components/links/Contact';
 

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ImageSection />
              <OurAssociation />
              <VisionMission />
              <OurPrograms />
              <CTASection />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/programs" element={<OurPrograms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

