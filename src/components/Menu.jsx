import React from 'react';
import menuIcon from '../assets/images/menu.png';

const Menu = () => {
  return (
    <div className='menu'>
      <span className='name'>Innocent Fiston Kabalisa</span>
      <span className='hambuger'>
        <img alt='hambuger button' src={menuIcon} />
      </span>
    </div>
  );
};

export { Menu };
