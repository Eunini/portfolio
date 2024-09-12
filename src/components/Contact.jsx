import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className="title" data-aos="fade-up"
     data-aos-duration="3000">Contact Me</h2>
      <div className="contact-info" data-aos="fade-up"
     data-aos-duration="3000">
      <div className="note">
        <p>Please feel free to contact me to collaborate on any project idea you have. I love to team up with people with great mind like mine</p>
      </div>

        <div className="div">
        <div className="contact-item" >
          <p className="contact-label">Phone:</p>
          <p className="contact-detail">09161704517</p>
        </div>

        <div className="contact-item">
          <h3 className="contact-label">Follow Me:</h3>
          <ul className="social-media-list">
          <li>
              <a href="https://wa.me/message/TFFG2ETW5L3CH1" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp />
              </a>
            </li>
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
      </div>
    </section>
  );
};

export default Contact;
