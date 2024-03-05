import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Skill from '../Skills/Skill';
import About from '../About/About';
import Work from '../Work/Work';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <About />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
