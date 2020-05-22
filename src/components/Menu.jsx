import React, { useState, useEffect, Fragment } from 'react';
import menuIcon from '../assets/images/menu.png';

const Menu = ({ Open }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.addEventListener('resize', updateWidth);
  });

  console.log('===let see now', width);

  return (
    <div className='menu'>
      <span className='name'>Innocent Fiston Kabalisa</span>
      {width >= 768 ? <div className='MenuOptionsContainer'>
        <div className='MenuOptions' >
        <span>Projects</span>
        <span>About Me</span>
        <span>Contact Me</span>
        </div>
        </div> 
        : 
        <Fragment>
      <span className='hambuger' onClick={Open}>
        <img alt='hambuger button' src={menuIcon} />
      </span>
      </Fragment>}
    </div>
  );
};

export { Menu };
