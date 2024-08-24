import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className="title" data-aos="fade-up"
     data-aos-duration="3000">Contact Me</h2>
      <div className="contact-info" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="contact-item" >
          <h3 className="contact-label">Phone:</h3>
          <p className="contact-detail">09161704517</p>
        </div>
    
        <div className="contact-item">
          <h3 className="contact-label">Follow Me:</h3>
          <ul className="social-media-list">
            <li>
              <a href="https://x.com/atanda_inioluwa" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/inioluwa-atanda-72a782270/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/Eunini" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
