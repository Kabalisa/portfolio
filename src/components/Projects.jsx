import React from 'react';
import { ProjectCard } from './ProjectCard';
import { authorsHaven, codelab } from '../assets/objects/projectsData';

const Projects = ({id}) => {
  return (
    <div className='Projects' id={id} >
      <div className='ProjectsBody'>
        <ProjectCard data={authorsHaven} />
        <ProjectCard data={codelab} />
        <ProjectCard data={codelab} />
      </div>
    </div>
  );
};

export { Projects };
