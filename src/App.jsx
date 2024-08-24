// src/App.jsx
import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import './mobile.css';
import './lightmode.css';
import Skills from './components/Skills';
import Aos from "aos"
import 'aos/dist/aos.css'
import ScrollToTop from './components/ScrollToTop';
import 'animate.css/animate.min.css';


const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: false });
    window.addEventListener('resize', Aos.refresh);
    return () => window.removeEventListener('resize', Aos.refresh);
  }, []);
  
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>
    </div>
  );
};

export default App;