/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Gmail from "../assets/images/gmail.png";
import Linkedin from "../assets/images/linkedin.png";
import Whatsapp from "../assets/images/whatsapp.png";
import Copyright from "../assets/images/copyright-symbol.png";

const ContactMe = ({ id }) => {
  return (
    <div className="ContactMe" id={id}>
      <div className="ContactsContainer">
        <span className="InTouch">Let's get in touch:</span>
        <div className="Contacts">
          <a href="mailto:ikabalisa20@gmail.com.com">
            <img alt="Gmail" src={Gmail} />
          </a>
          <a
            href="https://www.linkedin.com/in/fiston-kabalisa-93a918162/"
            target="_blank"
          >
            <img alt="Linkedin" src={Linkedin} />
          </a>
          <p>
            <img alt="whatsapp" src={Whatsapp} />
            <span>or call at +250785382213</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="Copyright">
        <img alt="copyright" src={Copyright} />
        <span>copyright Innocent Fiston Kabalisa 2020</span>
      </div>
    </div>
  );
};

export { ContactMe };
