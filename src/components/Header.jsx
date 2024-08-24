import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the toggle bar
import ThemeToggle from './ThemeToggle'; // Import your theme toggle component

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
          <div className="theme-toggle">
              <ThemeToggle />
          </div>
        <div className="mobile-toggle" onClick={toggleNav}>
          
          {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

          <nav className={`nav ${isNavOpen ? 'open' : ''}` } data-aos="zoom-in-right">
            <ul>
              <li><a href="#about" onClick={toggleNav}>About</a></li>
              <li><a href="#skills" onClick={toggleNav}>Skills</a></li>
              <li><a href="#projects" onClick={toggleNav}>Projects</a></li>
              <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
            </ul>
          </nav>

        </div>
    </header>
  );
};

export default Header;