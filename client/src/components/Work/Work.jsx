import React from 'react';
import { FaGithub, FaLinkedin, FaReact, FaJava, FaDatabase, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiIonic, SiLeetcode, SiCplusplus, SiStencil } from 'react-icons/si';
import './Work.css';

const Work = () => {
  return (
    <div className="work-container">
      <div className="bento-grid">
        
        <div className="bento-card main-section">
          
          <div className="section-block">
            <h2>👨‍💻 Professional Experience</h2>
            
            <div className="job-entry">
              <div className="job-header">
                <h3>Senior Software Engineer</h3>
                <span className="company-tag">Accolite Digital</span>
              </div>
              <p className="job-duration">July 2021 - Present</p>
              
              <p className="job-description">
                I've been a core part of the <strong>Morgan Stanley Research Portal</strong> team, shipping production code for both their web and mobile applications.
                <br /><br />
                Currently, I'm working on <strong>Morgan Stanley's AskAI</strong>, combining modern UI architectures with Generative AI to build the next generation of financial tools.
              </p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="section-block">
            <h2>🎓 Education</h2>
            
            <div className="job-entry education-entry">
              <div className="job-header">
                <h3>BE - Computer Engineering</h3>
                <span className="grade-tag">CGPA: 9.59/10</span>
              </div>
              <p className="job-duration">Dwarkadas J. Sanghvi College of Engineering</p>
              
              <p className="fun-note">
                Yeah, I have the paper to prove that I can center a div.
                <span role="img" aria-label="nerd"> 🤓</span>
              </p>

              <p className="job-description" style={{ marginTop: '25px' }}>
                I started my journey as a mentee at <strong>DJ Unicode</strong> and advanced to mentoring juniors in my third year, all while contributing to campus-level projects.
                <br /><br />
                I'd just started to truly enjoy the campus life when the pandemic hit. Picked up on DSA during Covid, here we are years later & still solving problems on Leetcode :P
              </p>
            </div>
          </div>

        </div>

        <div className="right-column">
            
            <div className="bento-card tech-card">
                <h3>🛠️ Tech Arsenal</h3>
                <div className="icons-grid">
                    <div className="tech-item" data-tooltip="Building dynamic user interfaces">
                        <FaReact color="#61DAFB" /> <span>React</span>
                    </div>
                    <div className="tech-item" data-tooltip="Enterprise-ready frontend framework">
                        <FaAngular color="#DD0031" /> <span>Angular</span>
                    </div>
                    <div className="tech-item" data-tooltip="High-performance system logic">
                        <SiCplusplus color="#00599C" /> <span>C++</span>
                    </div>
                    <div className="tech-item" data-tooltip="Robust backend development">
                        <FaJava color="#007396" /> <span>Java</span>
                    </div>
                    <div className="tech-item" data-tooltip="Scalable microservices">
                        <SiSpringboot color="#6DB33F" /> <span>Spring</span>
                    </div>
                    <div className="tech-item" data-tooltip="Structured data management">
                        <FaDatabase color="#336791" /> <span>SQL</span>
                    </div>
                    <div className="tech-item" data-tooltip="Web Components compiler">
                        <SiStencil color="#FFFFFF" style={{background: 'black', borderRadius:'50%'}} /> <span>StencilJS</span>
                    </div>
                    <div className="tech-item" data-tooltip="Cross-platform mobile apps">
                        <SiIonic color="#3880FF" /> <span>Ionic</span>
                    </div>
                </div>
            </div>

            <div className="bento-card profiles-card">
               <h3>🚀 Connect & Code</h3>
               <div className="links-stack">
                  
                  <a href="https://www.linkedin.com/in/ayush-shah-a6a133171/" target="_blank" rel="noreferrer" className="profile-link linkedin">
                    <div className="link-icon"><FaLinkedin /></div>
                    <div className="link-info">
                        <strong>LinkedIn</strong>
                        <small>Ayush Shah</small>
                    </div>
                    <div className="arrow">→</div>
                  </a>

                  <a href="https://leetcode.com/balor25" target="_blank" rel="noreferrer" className="profile-link leetcode">
                    <div className="link-icon"><SiLeetcode /></div>
                    <div className="link-info">
                        <strong>LeetCode</strong>
                        <small>balor25</small>
                    </div>
                    <div className="arrow">→</div>
                  </a>

                  <a href="https://github.com/ayushshah381" target="_blank" rel="noreferrer" className="profile-link github">
                    <div className="link-icon"><FaGithub /></div>
                    <div className="link-info">
                        <strong>GitHub</strong>
                        <small>ayushshah381</small>
                    </div>
                    <div className="arrow">→</div>
                  </a>

               </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Work;