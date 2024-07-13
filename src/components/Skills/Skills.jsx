import React from "react";
import { skills, tools } from "../constants";
import "./styles.scss";

function SkillSet() {
  return (
    <section>
      <div className="skills-wrapper">
        <h2 className="header" id="skills">
          Skills
        </h2>
        <div className="skills-wrapper-content">
          {skills.map((icon, index) => (
            <div title={icon.label} className="skills-wrapper-content-card">
              <icon.component size={80} color="white" />
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="skills-wrapper-header">Tools I use</div>
        <div className="skills-wrapper-content">
          {tools.map((icon, index) => (
            <div title={icon.label} className="skills-wrapper-content-card">
              <icon.component size={80} color="white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSet;
