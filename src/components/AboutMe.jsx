import React from "react";
import { SkillCard } from "./SkillCard";
import { skillsData } from "../assets/objects/skillsData";
import Profile from "../assets/images/innocent fiston kabalisa.jpg";

const AboutMe = ({ id }) => {
  return (
    <div className="AboutMe" id={id}>
      <div className="ImageText">
        <img className="ProfileImg" alt="profile" src={Profile} />
        <div className="TextContainer">
          <p className="AboutMeText">
            I am passionate and motivated to use technology as a tool to provide
            solutions that are accessible and beneficial to every level of
            society. What attracts me the most about software engineering is
            that it is not limited to a single or few fields of work. Any
            problem can have a technological solution or have its solution
            improved by technology. My goal is to use every opportunity of
            providing solutions that I get as a way to grow into a professional
            and person more prepared to deliver on my passion.
          </p>
        </div>
      </div>
      <div className="SkillsContainer">
        <span>Skills:</span>
        <div className="Skills">
          <SkillCard skillInfo={skillsData.frontend} />
          <SkillCard skillInfo={skillsData.backend} />
          <SkillCard skillInfo={skillsData.database} />
          <SkillCard skillInfo={skillsData.testing} />
          <SkillCard skillInfo={skillsData.devops} />
        </div>
      </div>
    </div>
  );
};

export { AboutMe };
