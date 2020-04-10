import React from 'react';
import { Menu } from './Menu';
import { Button } from './button';

const Welcome = () => {
  return (
    <div className='Welcome'>
      <Menu />
      <div className='MenuBody'>
        <p className='title'>Full-stack Software Engineer</p>
        <p className='titleDescription'>
          I am a frontend, backend and mobile developer.
        </p>
        <Button backgroundColor='#4A8236' color='white' value='See Projects' />
        <Button
          backgroundColor='#4A8236'
          color='white'
          value='Download Resume'
        />
      </div>
    </div>
  );
};

export { Welcome };
