import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function HomeSocials() {
  return (
    <div className="home_sccails">
      <a
        href="https://www.linkedin.com/in/mostafa-emad-4a6bbb25b/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/MostafaEmad16" target="_blank">
        <FaGithub />
      </a>
      <a href="#" target="_blank">
        <MdEmail />{" "}
      </a>
    </div>
  );
}

export default HomeSocials;
