import React, { useState } from 'react';
import lightModeIcon from '../assets/light.png';
import darkModeIcon from '../assets/dark.png';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <img
        src={darkMode ? lightModeIcon : darkModeIcon}
        alt={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="theme-icon"
      />
    </button>
  );
};

export default ThemeToggle;
