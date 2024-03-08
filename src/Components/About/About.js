import './About.css';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ opacity: scrollY > 100 ? 1 : 1 });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div>
      <motion.section
        animate={controls}
        initial={{ opacity: 1, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="about"
        id="About"
      >
        <div className="about-container">
          <h1 className="about-title">About me</h1>
          <div className="about-wrapper">
            <div className="about-wrapper1">
              <img src="nelsonvir.png" alt="nelsonVirgilio" />
            </div>
            <div className="about-wrapper2">
              <p>
                <h1>Nelson Virgilío</h1>
                Nelson Evaristo Virgílio i am a highly motivated Software
                Developer passionate about creating dynamic and intuitive web
                experiences. I possesses solid experience in HTML, CSS, and
                JavaScript, with specialized expertise in React.js. I have a
                proven ability to collaborate effectively in teams, translate
                designs into interactive interfaces, and optimize application
                performance.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
