import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoClose, IoMenu } from "react-icons/io5";
import "./style.scss";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <div className="logo">Priya Sonar</div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? (
            <span className="close-icon">
              {" "}
              <IoClose />
            </span>
          ) : (
            <span className="hamburger-icon">
              <IoMenu />
            </span>
          )}
        </div>
        <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
          <li>
            <Link
              className="nav-item"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              to="skills"
              spy={true}
              smooth={true}
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              to="experience"
              spy={true}
              smooth={true}
              onClick={toggleMenu}
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              to="projects"
              spy={true}
              smooth={true}
              onClick={toggleMenu}
            >
             Projects
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              to="contact-me"
              spy={true}
              smooth={true}
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
