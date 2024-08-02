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
  SiSass, 
  SiAntdesign,
  SiNetlify ,
  SiStyledcomponents
} from "react-icons/si";

export const experienceConfig = [
  {
    companyNameRole: "Technical Lead At CitiusTech",
    timeRange: "Mar 2022 - Present",
    rolesResponsibilites: [
      "Led the development of a learning platform, enhancing user engagement and performance",
      "Collaborate with US clients to define requirements and create tickets",
      "Create high-quality software architecture and design",
      "Optimized database queries, improving load times by 30%",
      "Provided mentorship and technical guidance to team members",
      "Received multiple client appreciations and awards",
    ],
  },
  {
    companyNameRole: "Technology Analyst At Infosys",
    timeRange: "May 2018 - Mar 2022",
    rolesResponsibilites: [
      "Developed and enhanced B2B platforms, including 3D rendering and API solutions",
      "Researched and implemented libraries for proofs of concept",
      "Collaborated with HK clients to gather requirements and optimize application performance",
      "Automated processes, reducing manual effort by 90%",
      "Diagnosed and resolved complex bugs, improving system stability",
      "Code review and debugging",
      "Recognized as Most Valuable Player for outstanding performance",
    ],
  },
  {
    companyNameRole:
      "Graduation - Bacholor's of Engineering in Information Techology",
    timeRange: "July 2013 - July 2017",
    rolesResponsibilites: [
      "Developed a project to detect the emotion of user comments using sentiment analysis",
      "Created visual graphs to display emotions for each product",
      "Built a movie ticket booking application using MongoDB",
      "Implemented features for searching, booking, and managing tickets",
    ],
  },
];

export const emailConfigs = {
  templateDetails: ["service_l8p3s5t", "template_ltg8swj"],
  payloadDetails: {
    publicKey: "yEZKgRJv7Q0IxU5eI",
  },
};
export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const skills = [
  { component: DiReact, label: "React" },
  { component: DiHtml5, label: "HTML" },
  { component: DiCss3, label: "CSS" },
  { component: DiJavascript1, label: "JavaScript" },
  { component: DiNodejs, label: "Node.js" },
  { component: SiTypescript, label: "TypeScript" },
  { component: SiSequelize, label: "Sequelize" },
  { component: SiRedux, label: "Redux" },
  { component: DiMysql, label: "MySQL" },
  { component: SiSass, label: 'SCSS'},
  { component: SiAntdesign , label: 'Ant Design'},
  { component: SiStyledcomponents, label: 'Styled Components'},
  { component: SiJest, label: "Jest" },
  { component: SiPostgresql, label: "Postgresql" },
  { component: FaAws, label: "AWS" },
];
export const tools = [
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
  {component: SiNetlify, label: "Netlify"}
];
