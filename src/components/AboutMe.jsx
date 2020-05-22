import React from 'react';
import { SkillCard } from './SkillCard';
import { skillsData } from '../assets/objects/skillsData';
import Profile from '../assets/images/innocent fiston kabalisa.jpg';

const AboutMe = ({id}) => {
  return (
    <div className='AboutMe' id={id} >
      <div className='ImageText' >
      <img className='ProfileImg' alt='profile' src={Profile} />
      <div className='TextContainer' >
       <p className='AboutMeText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      </div>
      <div className='SkillsContainer'>
        <span>Skills:</span>
        <div className='Skills'>
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
