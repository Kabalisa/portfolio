import React from 'react';
import { Link } from "react-scroll";
import { Button } from './button';

const Welcome = ({id}) => {
  return (
    <div className='Welcome' id={id}>
      <div className='MenuBody'>
        <p className='title'>Full-stack Software Engineer</p>
        <p className='titleDescription'>
          I am a frontend, backend and mobile developer.
        </p>
        <div className='buttonContainer' >
        <Link
          to='projects'
          smooth={true}
          spy={true}
          offset={-88}
          duration={1000}
        ><Button backgroundColor='#4A8236' color='white' value='See Projects' /></Link>
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
