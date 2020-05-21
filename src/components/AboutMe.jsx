import React from 'react';
import Profile from '../assets/images/innocent fiston kabalisa (2).jpg';

const AboutMe = () => {
  return (
    <div className='AboutMe'>
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
          <div className='SkillsCard' >
          <span>Frontend Skills</span>
          <ul>
            <li>that time</li>
            <li>that time</li>
            <li>that time</li>
            <li>that time</li>
            <li>that time</li>
            <li>that time</li>
            <li>that time</li>
            <li>that time</li>
          </ul>
          </div>
          <div className='SkillsCard'>
          <span>Backend Skills</span>
          <ul>
            <li>lower body</li>
            <li>lower body</li>
            <li>lower body</li>
            <li>lower body</li>
            <li>lower body</li>
          </ul>
          </div>
          <div className='SkillsCard'>
          <span>Database tools</span>
          <ul>
            <li>indigo</li>
          </ul>
          </div>
          <div className='SkillsCard'>
          <span>Testing tools</span>
          <ul>
            <li>indigo</li>
          </ul>
          </div>
          <div className='SkillsCard'>
          <span>DevOps tools</span>
          <ul>
            <li>indigo</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutMe };
