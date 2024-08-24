import React, { useState } from 'react';
import projects from '../constants/projectData';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="projects-container" id='project'>
      <h2 className="title" data-aos="fade-up"
     data-aos-duration="3000">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${index === activeIndex ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleClick(index)}
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
          >
            <h3 className="pro-title">{project.title}</h3>
              <img src={project.img} alt={project.title} className="project-thumbnail" />
              <div className="project-info">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className='project-title'><h3 className="project-title">{project.title}</h3></a>
                <p className="project-description">{project.description}</p>
              </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Projects;
