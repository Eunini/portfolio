import React, { useState, useEffect } from 'react';
import useTypingEffect from '../hooks/useTypingEffect';
import { FaDownload } from 'react-icons/fa';

const About = () => {
    const heading = "Hii! I'm Inioluwa,";
    const aboutText = "I am a passionate software developer with a strong focus on front-end development, with a solid foundation in JavaScript, React, and other modern web technologies, I thrive on turning complex problems into user-friendly solutions.";
    const typedHeading = useTypingEffect(heading, 200);
    const [slideIn, setSlideIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleResumeClick = () => {
        // If the resume is not ready, open the modal
        setIsModalOpen(true);
    };

    useEffect(() => {
        if (typedHeading === heading) {
            setSlideIn(true);
        }
    }, [typedHeading, heading]);

    return (
        <section id="about">
            <div className="part">
                <div >
                    <h1 className="title" data-aos="fade-up" data-aos-duration="3000">ABOUT ME</h1>
                    <h2 data-aos="fade-up" data-aos-duration="500">{typedHeading}</h2>
                    <p className={slideIn ? 'slide-in' : ''} data-aos="zoom-in">{aboutText}</p>
                </div>

                <div className='part2'>
                    <img src="/images/profile.png" alt="" data-aos="zoom-in" className="myprofile"/>
                </div>
            </div>

            <div className="download-container" data-aos="zoom-in">
               <a href= "/images/Resume.pdf"
  className="download-button" download>
                    Download my resume <FaDownload size={16} />
                </a>
            </div>

         {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                   <div className="modal-content" data-aos="zoom-in-up" data-aos-duration="800">
                        <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" className="resume">
                            Not yet ready, check back later.
                        </h2>
                        <button onClick={handleCloseModal} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;
