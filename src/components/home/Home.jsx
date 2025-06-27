import React from "react";
import Me from "../../assets/MostafaProfile.png";
import CV from "../../assets/Mostafa (2).pdf";
import "./Home.css";
import HomeSocials from "../home/HomeSocials";
function Home() {
  return (
    <div className="home">
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Mostafa Emad</h1>
        <h4 className="text-light">Full Stack Developer</h4>

        <div className="btns">
          <a href={CV} className="btn" download>Downlod CV</a>
          <a href="#" className="btn btn-primary">Lets's Talk</a>
        </div>

        <div className="me">
          <img src={Me} alt="" />
        </div>

        
        <a href="#About" className="scroll_down"> Scroll Down</a>

        <HomeSocials />
      </div>
    </div>
  );
}

export default Home;
