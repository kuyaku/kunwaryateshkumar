export const techs = [
  "Data Structures and Algos",
  "Web Development",
  "Django",
  "Django Rest Framework",
  "React",
  "A complete package!",
];

export const skills = [
  "C++",
  "CSS",
  "Django",
  "Docker",
  "Git",
  "HTML",
  "JS",
  "Shell",
  "MongoDB",
  "Postgres",
  "Python",
  "React",
  "Redux",
  "Tailwind",
];

export const tools = ["Insomnia", "Postman", "Ubuntu", "Vscode"];

export const invertSkills = ["CSS", "HTML", "JS", "MongoDB"];

const svgContext = require.context("./assets/skills/svgs", false, /\.svg$/);
const paths = svgContext.keys();
export const icons = paths.map((path) => svgContext(path));

// export const icons = getIcons("./assets/skills/svgs");
const svgContext1 = require.context("./assets/toolbar/svgs", false, /\.svg$/);
const toolbarPaths = svgContext1.keys();
export const toolIcons = toolbarPaths.map((path) => svgContext1(path));
