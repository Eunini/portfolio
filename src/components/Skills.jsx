import React, { useState } from 'react';
import skills from '../constants/skillset';

const Skills = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleSkillClick = (skill) => {
    setModalContent(skill);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  return (
    <div className="skills-container">
      <h2 className="title" data-aos="fade-up"
     data-aos-duration="3000">My Skills</h2>
      <div className="skills-slider">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="square"
              onClick={() => handleSkillClick(skill)}
              data-aos="fade-down"
            >
              <div className="square">
                <img src={skill.img} alt={`${skill.name} logo`} className="skill-img" />
                <div className="skill-name">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalContent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" data-aos="zoom-in-up" data-aos-duration="800">
            <img src={modalContent.img} alt={`${modalContent.name} logo`} className="modal-img" />
            <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800">{modalContent.info}</p>
            <button onClick={handleCloseModal} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;