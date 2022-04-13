import simbirsoft from "../assets/images/carrer/SimbirSoft.png";
import everland from "../assets/images/carrer/logo_evland.png";
import itincubator from "../assets/images/skills/itincubator.png";
import javascript from "../assets/images/skills/javascript.png";
import react from "../assets/images/skills/react.png";
import redux from "../assets/images/skills/redux.png";
import typescript from "../assets/images/skills/typescript.png";
import css from "../assets/images/skills/css3.png";
import html from "../assets/images/skills/html.jpg";
import heroku from "../assets/images/skills/heroku.png";
import figma from "../assets/images/skills/figma.png";
import webstorm from "../assets/images/skills/WebStorm_Icon.png";

export const companies = [
  {
    title: "SimbirSoft",
    alt: "PS image",
    role: "Intern frontend developer",
    skills: ["react", "typescript", "redux/redux-saga", "swagger"],
    period: "02.2022 - 05.2022",
    logo: simbirsoft,
  },
  {
    title: "IT-Incubator",
    alt: "PS image",
    role: "Student frontend developer",
    skills: ["react", "typescript", "redux", "CS"],
    period: "02.2022 - 07.2022",
    logo: itincubator,
  },
  {
    title: "Everland",
    alt: "BT image",
    role: "Layout designer",
    skills: ["HTML", "CSS", "javascript", "WordPress"],
    period: "09.2021 - present",
    logo: everland,
  },
];

export const skillsArray = [
  {
    name: "Java Script",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript,
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react,
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript,
  },
  {
    name: "Redux",
    description: "State manager for app",
    link: "https://redux.js.org/",
    type: "development",
    image: redux,
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html,
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css,
  },

  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku,
  },
  {
    name: "WebStorm IDE",
    description: "Code editor of choice",
    link: "https://www.jetbrains.com/webstorm/",
    type: "development",
    image: webstorm,
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma,
  },
];
