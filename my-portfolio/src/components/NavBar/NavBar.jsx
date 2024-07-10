import React from "react";
import { Link } from 'react-scroll'
import "./style.scss";

export const NavBar = () => {
  return (
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div>Logo</div>
          <ul>
            <li>
              <Link className="nav-item" activeClass="active" to="home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
            <Link className="nav-item" to="experience" spy={true} smooth={true}>
                Work Experience
              </Link>
            </li>
            <li>
            <Link className="nav-item" to="contact-me" spy={true} smooth={true}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};
