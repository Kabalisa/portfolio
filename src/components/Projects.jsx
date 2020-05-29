import React from "react";
import { ProjectCard } from "./ProjectCard";
import {
  authorsHaven,
  codelab,
  sendIt,
  portfolio,
  converge,
  companionApp,
} from "../assets/objects/projectsData";

const Projects = ({ id }) => {
  return (
    <div className="Projects" id={id}>
      <div className="ProjectsBody">
        <ProjectCard data={authorsHaven} />
        <ProjectCard data={codelab} />
        <ProjectCard data={sendIt} />
        <ProjectCard data={portfolio} />
        <ProjectCard data={converge} />
        <ProjectCard data={companionApp} />
      </div>
    </div>
  );
};

export { Projects };
