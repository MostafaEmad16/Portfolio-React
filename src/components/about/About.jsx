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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            qui quia nulla fugiat expedita adipisci mollitia nihil, unde
            exercitationem aperiam dolore? Temporibus error beatae inventore
            assumenda aliquid quod mollitia obcaecati?
          </p>
          <a href="#conotact" className="btn btn-primary">let's Tolk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
