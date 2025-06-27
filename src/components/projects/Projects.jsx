import React from "react";
import "./projects.css";
import img1 from "../../assets/BG.jpg";
import img2 from "../../assets/Coffee.png";
import img3 from "../../assets/protoflio 1.png";
import img4 from "../../assets/Facbook.png";
import img5 from "../../assets/Calc.png";
import img6 from "../../assets/Prayer.png";

const portfolioData = [
  {
    id: 1,
    image: img1,
    title: "Netflix",
    github: "https://github.com/MostafaEmad16/NetFlux",
    demo: "../../../project_out/Sgin up.html",
  },
  {
    id: 2,
    image: img2,
    title: "Coffee",
    github: "https://github.com/MostafaEmad16/Coffee",
    demo: "../../../project_out/coofee.html",
  },
  {
    id: 3,
    image: img3,
    title: "E_Commerce",
    github: "https://github.com/MostafaEmad16/E--Commers",
    demo: "../../../project_out/App.html",
  },
  {
    id: 4,
    image: img4,
    title: "Facbook",
    github: "https://github.com/MostafaEmad16/Facebook",
    demo: "../../../project_out/Fecebook.html",
  },
  {
    id: 5,
    image: img5,
    title: "calculator",
    github: "https://github.com/MostafaEmad16/calculator",
    demo: "https://MostafaEmad16.github.io/calculator/",
  },
  {
    id: 6,
    image: img6,
    title: "Prayer Time",
    github: "https://github.com/project4",
    demo: "http://localhost:5173/",
  },
];

function Projects() {
  return (
    <section className="project" id="project">
      <div className="top_section">
        <h5>My Project</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container project_container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="protflio_item">
            <div className="protflio_item_img">
              <img src={image} alt="" />
            </div>

            <h3>{title}</h3>
            <div className="protflio_item_btns">
              <a href={github} target="_blank" className="btn">
                GitHub
              </a>
              <a href={demo} target="_blank" className="btn btn-primary">
                Live Project 
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
