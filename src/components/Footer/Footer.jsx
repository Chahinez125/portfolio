import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-copywright">
          <h3>Designed and Developed by Chahinez</h3>
        </div>
        <div className="footer-copywright">
          <h3>Copyright © {year} OH</h3>
        </div>
        <div className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Chahinez125"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="le lien vers github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ouerdane-chahinez-b0296123a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="le lien vers Linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
