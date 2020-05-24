import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-scroll";
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
      <span className='name' >
      <Link
        activeClass="nameActive"
        to='name'
        spy={true}
        smooth={true}
        offset={-90}
        duration={1000}
        >
        Innocent Fiston Kabalisa
        </Link>
      </span>
      {width >= 768 ? <div className='MenuOptionsContainer'>
        <div className='MenuOptions' >
          <Link
          activeClass='optionsActive' 
          to='projects'
          smooth={true}
          spy={true}
          offset={-88}
          duration={1000}
          >
          Projects
          </Link>
          <Link
            activeClass='optionsActive'
            to='aboutMe'
            smooth={true}
            spy={true}
            offset={-88}
            duration={1000}
            >
            About Me
          </Link>
           <Link
            activeClass='optionsActive'
            to='contactMe'
            smooth={true}
            spy={true}
            offset={-90}
            duration={1000}
            >
              Contact Me
          </Link>
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
