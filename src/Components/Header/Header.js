import './Header.css';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import {
  // FiFacebook,
  FiInstagram,
  // FiTwitter,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';

const Header = () => {
  function stopR(e) {
    e.preventDefault();
  }
  return (
    <div>
      <header className="header animacao" id="Home">
        <div className="header--text">
          <motion.div
            initial={{ opacity: 1, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="header--text__name">Nelson Virgílio</h1>
            <h3 className="header--text__title">
              I'm<span> Software Developer</span>
            </h3>
            <div className="header--text__social">
              <a
                href="https://www.instagram.com/nelsonevirgilio/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => stopR}
              >
                <FiInstagram />
              </a>
              {/* <a href="#">
              <FiFacebook />
            </a> */}
              {/* <a href="#">
              <FiTwitter />
            </a> */}
              <a
                href="https://github.com/Nelson-Virgilio"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => stopR}
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nelson-virgilio-84487512b"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => stopR}
              >
                <FiLinkedin />
              </a>
            </div>
            <Link to="Contact" span={true} smooth={true}>
              <span className="header-buttom">Contact</span>
            </Link>
          </motion.div>
        </div>
        <div className="header--images">
          <img src="nelsonVirgilio.png" alt="foto-do-Nelson-Virgilio" />
        </div>
      </header>
    </div>
  );
};

export default Header;
