import './Footer.css';
import React from 'react';
import {
  // FiFacebook,
  FiInstagram,
  // FiTwitter,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();
  function stopR(e) {
    e.preventDefault();
  }
  return (
    <div>
      <footer className="footer">
        <h1 className="footer-name">Nelson Virgílio</h1>
        <div className="footer-social">
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
        <p className="footer-p1">© Copyright {year}. All Rights Reserved!</p>
      </footer>
    </div>
  );
};

export default Footer;
