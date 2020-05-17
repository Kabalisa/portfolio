/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Gmail from '../assets/images/gmail.png';
import Linkedin from '../assets/images/linkedin.png';
import Whatsapp from '../assets/images/whatsapp.png';
import Copyright from '../assets/images/copyright-symbol.png';

const ContactMe = () => {
  return (
    <div className='ContactMe'>
      <div className='ContactsContainer'>
        <span>Let's get in touch:</span>
        <div className='Contacts'>
          <a>
            <img alt='Gmail' src={Gmail} />
          </a>
          <a>
            <img alt='Linkedin' src={Linkedin} />
          </a>
          <p>
            <img alt='whatsapp' src={Whatsapp} />
            <span>or call on +250785382213</span>
          </p>
        </div>
      </div>
      <hr />
      <div className='Copyright'>
        <img alt='copyright' src={Copyright} />
        <span>copyright Innocent Fiston Kabalisa 2020</span>
      </div>
    </div>
  );
};

export { ContactMe };
