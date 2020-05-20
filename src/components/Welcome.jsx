import React from 'react';
import { Button } from './button';

const Welcome = () => {
  return (
    <div className='Welcome'>
      <div className='MenuBody'>
        <p className='title'>Full-stack Software Engineer</p>
        <p className='titleDescription'>
          I am a frontend, backend and mobile developer.
        </p>
        <div className='buttonContainer' >
        <Button backgroundColor='#4A8236' color='white' value='See Projects' />
        <Button
          backgroundColor='#4A8236'
          color='white'
          value='Download Resume'
        />
        </div>
      </div>
    </div>
  );
};

export { Welcome };
