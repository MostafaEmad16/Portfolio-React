import React from "react";
import "./about.css";
import image from '../../assets/Mostafa1.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get to know</h5>
        <h2>About me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years working</small>
            </div>

            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clints</h5>
              <small>200+ worldwide</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>projects</h5>
              <small>20+ Completed</small>
            </div>
          </div>

          <p>
            I am Mostafa Emad, a Full Stack Software Engineer and Web Developer with real-world experience in implementing numerous projects.
            I am currently working on a web project for the global NASA Space Apps competition.
            I have been recognized in numerous teams and initiatives, and have participated in courses at academies such as Tech Stars.
            I also have significant achievements in the field of creativity and robotics, including:

🏆 First place in the ISF competition at the district and governorate levels

🥇 First place in the ISFE competition at the district and governorate levels

🤖 First place in the Robotics Olympics at the district and Giza levels, and qualified for the national finals

Among the achievements I am most proud of is being part of the team that submitted a project to join Japan, and contributing to the establishment of the Japanese Ministry of Technology, in the presence of Dr. Amr Basila, His Excellency the Egyptian Minister of Education, Dr. Mohamed Ahmed Abdel Latif, and businessman Emad El-Suwaidi.
          </p>
          <a href="#conotact" className="btn btn-primary">let's Tolk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
