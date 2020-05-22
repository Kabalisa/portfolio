import React from 'react';

const SkillCard = ({skillInfo}) => {
    const {title, data} = skillInfo;
    return (
        <div className='SkillsCard' >
          <span>{title}</span>
          <ul>
            {data.map(skill => <li>{skill}</li> )}
          </ul>
          </div>
    );
};

export { SkillCard };