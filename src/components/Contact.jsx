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
          <h3 className="contact-label">Phone Number:</h3>
          <p className="contact-detail">09161704517</p>
        </div>
    
        <div className="contact-item">
          <h3 className="contact-label">Follow Me:</h3>
          <ul className="social-media-list">
            <li>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
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
