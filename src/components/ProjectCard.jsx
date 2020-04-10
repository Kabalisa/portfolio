/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const extra = (
  <div>
    <div className='extraLinks'>
      <a>stacks</a>
      <a>demo</a>
      <a>visit</a>
    </div>
    <div className='extraIcons'>
      <a>
        <Icon name='github' />
        GitHub
      </a>
      <a>
        <Icon name='pin' />
        Pivotal Tracker
      </a>
    </div>
  </div>
);

const ProjectCard = ({ data }) => {
  return (
    <div className='ProjectsCard'>
      <Card
        image={data.image}
        header={data.name}
        meta={data.type}
        description={data.description}
        extra={extra}
      />
    </div>
  );
};

export { ProjectCard };
