import React from "react";
import "./Skills.css";

import CSS from "../../assets/css3.svg";
import Tailwindcss from "../../assets/tailwindcss.svg";
import Javascript from "../../assets/javascript.svg";
import Html from "../../assets/download.png";
import ASPnet from "../../assets/ASp.net core.png";
import GitHup from "../../assets/Git.png";
import BootStrap from "../../assets/bootStrap.png";
import Reactjs from "../../assets/react.svg";
import Probem from "../../assets/Problem Solving.png";
import CCCC from "../../assets/CCC.png";

const SkillsData = [
  {
    id: 1,
    image: Html,
    title: "Html",
    disc: "web Desgin",
  },
  {
    id: 2,
    image: CSS,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: 3,
    image: Javascript,
    title: "Javascript",
    disc: "Interface",
  },
  {
    id: 4,
    image: Reactjs,
    title: "Reactjs",
    disc: "Framework",
  },
  {
    id: 5,
    image: Tailwindcss,
    title: "Tailwindcss",
    disc: "User Interface",
  },
  {
    id: 6,
    image: BootStrap,
    title: "BootStrap",
    disc: "User Interface",
  },
  {
    id: 7,
    image: ASPnet,
    title: "ASP.net Core",
    disc: "Backend",
  },
  {
    id: 8,
    image: GitHup,
    title: "GitHup",
    disc: "Server Manger",
  },
  {
    id: 9,
    image: Probem,
    title: "Problem Solving",
    disc: "Problem Solving",
  },
  {
    id: 10,
    image: CCCC,
    title: "C#",
    disc: " Backend",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>what skills i Have</h5>
        <h2>My Expreience</h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article key={id} className="card_skill">
            <div className="icon">
              <img src={image} alt="" />
            </div>
            
            <div className="content">
              <h4>{title}</h4>
              <div className="text-light">{disc}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
