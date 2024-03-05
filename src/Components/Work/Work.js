import './work.css';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Work = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ opacity: scrollY > 100 ? 1 : 1 });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  function stopRef(e) {
    e.preventDefault();
  }
  return (
    <div>
      <section className="work" id="Work">
        <div className="work-container">
          <h1 className="work-title">Portfolio</h1>
          <div className="work-project-wrapper">
            <div className="work-projects">
              <div className="project1">
                <motion.div
                  animate={controls}
                  initial={{ opacity: 1, x: -300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="project1-img"
                >
                  <img src="tela1.png" alt="project1" />
                </motion.div>
                <div className="project-buttons">
                  <a
                    href="https://github.com/Nelson-Virgilio/Bankist"
                    className="buttom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Github
                  </a>
                  <a
                    href="https://bankistdev.netlify.app/"
                    className="buttom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Live
                  </a>
                </div>
              </div>

              <motion.div
                animate={controls}
                initial={{ opacity: 1, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="project2"
              >
                <div className="project2-img">
                  <img src="tela2.png" alt="project2" />
                </div>
                <div className="project-buttons">
                  <a
                    href="https://github.com/Nelson-Virgilio/Animais-fantasticos"
                    className="buttom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Github
                  </a>
                  <a
                    href="https://animalfantastico.netlify.app/"
                    className="buttom"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Live
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="work-projects">
              <motion.div
                animate={controls}
                initial={{ opacity: 1, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="project1"
              >
                <div className="project1-img">
                  <img src="tela3.png" alt="project1" />
                </div>
                <div className="project-buttons">
                  <a
                    href="https://github.com/Nelson-Virgilio/Usepopcorn"
                    className="buttom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Github
                  </a>
                  <a
                    href="https://usepopcorn.netlify.app"
                    className="buttom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Live
                  </a>
                </div>
              </motion.div>

              <motion.div
                animate={controls}
                initial={{ opacity: 1, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="project2"
              >
                <div className="project2-img">
                  <img src="tela4.png" alt="project2" />
                </div>
                <div className="project-buttons">
                  <a
                    href="https://github.com/Nelson-Virgilio/Pig-game"
                    className="buttom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Github
                  </a>
                  <a
                    href="https://picgame.netlify.app/"
                    className="buttom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Live
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="work-projects">
              <motion.div
                animate={controls}
                initial={{ opacity: 1, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="project1"
              >
                <div className="project1-img">
                  <img src="tela5.png" alt="project1" />
                </div>
                <div className="project-buttons">
                  <a
                    href="https://github.com/Nelson-Virgilio/Nexter"
                    className="buttom"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Github
                  </a>
                  <a
                    href="https://rent-h.netlify.app/"
                    className="buttom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Live
                  </a>
                </div>
              </motion.div>

              <div className="project2">
                <motion.div
                  animate={controls}
                  initial={{ opacity: 1, x: 300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="project2-img"
                >
                  <img src="tela6.png" alt="project2" />
                </motion.div>
                <div className="project-buttons">
                  <a
                    href="https://github.com/Nelson-Virgilio/Barber-shop"
                    className="buttom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Github
                  </a>
                  <a
                    href="https://barbershop-dev.netlify.app/"
                    className="buttom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => stopRef}
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
