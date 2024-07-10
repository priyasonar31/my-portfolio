/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.scss";

export const NavBar = () => {
  const [activeNav, setActiveNav] = useState("home");
  const onUpdateActiveNav = (nav) => setActiveNav(nav);

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div>Logo</div>

          <ul>
            <li>
              <a className="nav-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-item" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="nav-item" href="#">
                Work Experience
              </a>
            </li>
            <li>
              <a className="nav-item" href="#">
                Contact Me
              </a>
            </li>
          </ul>

          {/* <button className="contact-btn">Hire Me</button> */}
        </div>
      </nav>
    </>
  );
};
