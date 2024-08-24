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
      <h2 className="title">My Projects</h2>
      <div className="projects-grid" data-aos="fade-up">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${index === activeIndex ? 'active' : ''} animate__animated animate__bounce`}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleClick(index)}
          >
            <h3 className="pro-title">{project.title}</h3>
              <img src={project.img} alt={project.title} className="project-thumbnail" />
              <div className="project-info">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className='project-title'><h3 className="project-title">{project.title}</h3></a>
                <p className="project-description">{project.description}</p>
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className='project-title'><h3 className="project-title">Source code</h3></a>
              </div>
          </div>
          
        ))}
      </div>

    </div>
  );
};

export default Projects;
