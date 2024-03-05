import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Skill.css';

const Skill = () => {
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
        id="Skills"
        className="skills"
      >
        <div className="skill-container">
          <div className="section-title">
            <h2 className="skill-title">Skills</h2>
            <p>
              I currently possess a strong expertise in frontend development
              using React. Although my knowledge in backend using Node.js and
              SQL is basic, I am committed to enhancing it. I am interested in
              expanding my knowledge to include technologies such as React
              Native, Python, C#, and C++ in the near future.
            </p>
          </div>
          <div className="skillWrappe">
            <div className="skill-contents">
              <div className="progressBar">
                <div className="skill-content-1">
                  <span>Html</span>
                  <span>100%</span>
                </div>
                <div className="skill-progressBar1 Bar"></div>
              </div>

              <div className="progressBar">
                <div className="skill-content-1">
                  <span>Css</span>
                  <span>95%</span>
                </div>
                <div className="skill-progressBar2 Bar"></div>
              </div>

              <div className="progressBar">
                <div className="skill-content-1">
                  <span>JavaScript</span>
                  <span>80%</span>
                </div>
                <div className="skill-progressBar3 Bar"></div>
              </div>
            </div>

            <div className="skill-contents">
              <div className="progressBar">
                <div className="skill-content-1">
                  <span>React.js</span>
                  <span>75%</span>
                </div>
                <div className="skill-progressBar4 Bar"></div>
              </div>
              <div className="progressBar">
                <div className="skill-content-1">
                  <span>GIT</span>
                  <span>90%</span>
                </div>
                <div className="skill-progressBar5 Bar"></div>
              </div>
              <div className="progressBar">
                <div className="skill-content-1">
                  <span>PHOTOSHOP</span>
                  <span>70%</span>
                </div>
                <div className="skill-progressBar6 Bar"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Skill;
