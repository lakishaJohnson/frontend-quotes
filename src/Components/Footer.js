import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer-Container">
      <div className="Contacts">
        <div className="Kisha-Links">
          <img
            src="https://mcsmrampage.com/wp-content/uploads/2020/10/B8F13A2C-3EC6-4AE2-9FCC-C2D5BF7313C6.jpeg" // Replace with the path to Kisha's photo
            alt="Kisha J."
            className="Contact-Photo"
          />
          <a
            href="https://github.com/lakishaJohnson"
            target="_blank"
            rel="noopener noreferrer"
            className="Contact-Link"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lakisha-johnson-0b0587219/"
            target="_blank"
            rel="noopener noreferrer"
            className="Contact-Link"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Pursuit Fellowship 9_6. All rights
          reserved.
        </p>
        <div className="Tee-Links">
          <img
            src="https://i.pinimg.com/originals/0e/50/39/0e503918829c61bd24803ce064546cee.jpg" // Replace with the path to T. Gurung's photo
            alt="T. Gurung"
            className="Contact-Photo"
          />
          <a
            href="https://github.com/teegrg"
            target="_blank"
            rel="noopener noreferrer"
            className="Contact-Link"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/tsheringgurungny/"
            target="_blank"
            rel="noopener noreferrer"
            className="Contact-Link"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
