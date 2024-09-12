import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import ThemeToggle from './Themetoggle'; 

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="cont">
        <img src="/images/logo.png" alt="" className='logo' />
      </div>

      <div className="navlinks">
        <ThemeToggle />
        <div className="mobile-toggle" onClick={toggleNav}>
          {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <nav className={`nav ${isNavOpen? 'open' : ''}`}>
          {isNavOpen && (
            <ul>
              <li><a href="#about" onClick={toggleNav}  data-aos="fade-up">About</a></li>
              <li><a href="#skill" onClick={toggleNav}  data-aos="fade-up">Skill</a></li>
              <li><a href="#project" onClick={toggleNav}  data-aos="fade-up">Project</a></li>
              <li><a href="#contact" onClick={toggleNav}  data-aos="fade-up">Contact</a></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
