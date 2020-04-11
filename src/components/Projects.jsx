import React from 'react';
import { ProjectCard } from './ProjectCard';
import { authorsHaven, codelab } from '../assets/objects/projectsData';

const Projects = () => {
  return (
    <div className='Projects'>
      <div className='ProjectsBody'>
        <ProjectCard data={authorsHaven} />
        <ProjectCard data={codelab} />
      </div>
    </div>
  );
};

export { Projects };
