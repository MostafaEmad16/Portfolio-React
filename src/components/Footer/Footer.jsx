import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="" className="footer_logo">
        Mostafa Emad
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="#" target="_blank">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank">
          <FaFacebookF />
        </a>
        <a href="#" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; <a href="#">Mostafa Emad</a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
