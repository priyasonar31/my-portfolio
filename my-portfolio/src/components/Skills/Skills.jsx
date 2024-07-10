import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiCss3,
  DiHtml5,
  DiWindows,
  DiGit,
} from "react-icons/di";
import {
  FaAws,
  FaGithub,
  FaBitbucket,
  FaJira,
  FaOctopusDeploy,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSequelize,
  SiJest,
  SiRedux,
  SiPostgresql,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiJenkins,
  SiSlack,
  SiCircleci,
} from "react-icons/si";
import "./styles.scss";

function SkillSet() {
  const skills = [
    { component: DiReact, label: "React" },
    { component: DiJavascript1, label: "JavaScript" },
    { component: DiNodejs, label: "Node.js" },
    { component: SiTypescript, label: "TypeScript" },
    { component: SiSequelize, label: "Sequelize" },
    { component: SiRedux, label: "Redux" },
    { component: DiMysql, label: "MySQL" },
    { component: SiJest, label: "Jest" },
    { component: SiPostgresql, label: "Postgresql" },
    { component: DiHtml5, label: "HTML" },
    { component: DiCss3, label: "CSS" },
    { component: FaAws, label: "AWS" },
  ];
  const tools = [
    { component: DiWindows, label: "Windows" },
    { component: SiVisualstudiocode, label: "VS Code" },
    { component: SiPostman, label: "Postman" },
    { component: DiGit, label: "Git" },
    { component: FaGithub, label: "GitHub" },
    { component: FaBitbucket, label: "Bitbucket" },
    { component: SiSlack, label: "Slack" },
    { component: FaJira, label: "Jira" },
    { component: SiFigma, label: "Figma" },
    { component: SiJenkins, label: "Jenkins" },
    { component: SiCircleci, label: "CircleCI" },
    { component: FaOctopusDeploy, label: "Octopus" },
  ];

  return (
    <section>
    <div className="skills-wrapper">
      <div className="skills-wrapper-header">Skills</div>
      <div className="skills-wrapper-content">
        {skills.map((icon, index) => (
          <div title={icon.label} className="skills-wrapper-content-card">
            <icon.component size={80} color="white" />
          </div>
        ))}
      </div>
      <br/>
      <br/>
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
