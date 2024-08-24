import React, { useState, useEffect } from 'react';
import useTypingEffect from '../hooks/useTypingEffect';

const About = () => {
    
    const heading = "Hii! I'm Inioluwa,";
    const aboutText = "I am a passionate software developer with a strong focus on front-end development, with a solid foundation in JavaScript, React, and other modern web technologies, I thrive on turning complex problems into user-friendly solutions. ";
    const typedHeading = useTypingEffect(heading, 200);
    const [slideIn, setSlideIn] = useState(false);
  
    useEffect(() => {
      if (typedHeading === heading) {
        setSlideIn(true);
      }
    }, [typedHeading, heading]);
  
    return (
      <section id="about">
        <h1 className="title" data-aos="fade-up"
     data-aos-duration="3000">ABOUT ME</h1>
        <h2 data-aos="fade-up"
     data-aos-duration="3000">{typedHeading}</h2>
        <p className={slideIn ? 'slide-in' : ''} data-aos="zoom-in">{aboutText}</p>
      </section>
    );
  };
  
  export default About;