import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import ThemeToggle from './ThemeToggle'; 

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="cont">
        <h1 className="logo">My Portfolio</h1>
      </div>

      <div className="navlinks">
        <ThemeToggle />
        <div className="mobile-toggle" onClick={toggleNav}>
          {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <nav className={`nav ${isNavOpen ? 'open' : ''}`} data-aos="fade-up">
          {isNavOpen && (
            <ul>
              <li><a href="#about" onClick={toggleNav} className='animate__animated animate__bounce' data-aos="fade-in" data-aos-duration="1000">About</a></li>
              <li><a href="#skills" onClick={toggleNav} className='animate__animated animate__bounce' data-aos="fade-in" data-aos-duration="2000">Skills</a></li>
              <li><a href="#project" onClick={toggleNav} className='animate__animated animate__bounce' data-aos="fade-in" data-aos-duration="3000">Projects</a></li>
              <li><a href="#contact" onClick={toggleNav} className='animate__animated animate__bounce' data-aos="fade-in" data-aos-duration="4000">Contact</a></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;