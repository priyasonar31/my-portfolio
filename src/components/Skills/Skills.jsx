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
        <div className="content-wrapper">
          <h3>Technologies I Use</h3>
          <div className="content">
            <div className="capsule-wrapper">
              {skills.map(({ component: SvgComponent, label }) => (
                <div className="capsule">
                  <SvgComponent size={28} />
                  <span className="text">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          <h3>Development & Productivity</h3>
          <h3>Tools I Use</h3>
          <div className="content">
            <div className="capsule-wrapper">
              {tools.map(({ component: SvgComponent, label }) => (
                <div className="capsule">
                  <SvgComponent size={28} />
                  <span className="text">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSet;
