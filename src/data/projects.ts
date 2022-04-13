import crypto from "../assets/images/projects/crypto.png";
import blog from "../assets/images/projects/blog.jpeg";
import carsharing from "../assets/images/projects/carsharing.png";
import admin from "../assets/images/projects/adminpanel.jpeg";
import soccer from "../assets/images/projects/soccer.png";
export interface IProject {
  id: number;
  title: string;
  logo: string;
  link: string;
  desc: string;
  technologies: string[];
}
export const projectsList: IProject[] = [
  {
    id: 1,
    title: "Crypto info",
    logo: crypto,
    link: "https://github.com/GalichAnton/Crypto",
    desc: `SPA for collecting and displaying information about cryptocurrencies`,
    technologies: ["react", "javascript", "redux"],
  },
  {
    id: 2,
    title: "Blog app",
    link: "https://github.com/GalichAnton/Blog",
    logo: blog,
    desc: `An application, a blog where the user can add, update, delete posts and leave comments under them.`,
    technologies: ["react", "redux", "typescript", "express"],
  },
  {
    id: 3,
    title: "Carsharing app",
    logo: carsharing,
    link: "https://github.com/GalichAnton/carsharing",
    desc: `An application that allows you to book a car from the available order points marked on the map`,
    technologies: ["react", "typescript", "redux/toolkit", "maps api"],
  },
  {
    id: 4,
    title: "Admin panel for carsharing",
    logo: admin,
    link: "https://github.com/GalichAnton/CarsharingAdmin",
    desc: `Admin panel for carsharing app with full CRUD operations for system entries`,
    technologies: ["react", "typescript", "redux/toolkit/saga"],
  },
  {
    id: 5,
    title: "SoccerStat",
    logo: soccer,
    link: "https://github.com/GalichAnton/SoccerStat",
    desc: `Application for viewing statistics of football competitions`,
    technologies: ["react", "typescript", "redux/toolkit"],
  },
];
