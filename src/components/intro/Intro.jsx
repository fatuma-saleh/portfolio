import React from "react";
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="docs/fatu.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There! I'm</h2>
          <h1>Fatuma Saleh</h1>
          <h3>Full Stack Web Developer</h3>
        </div>
        <a href="#portfolio">
        <img src="docs/arrow.png" alt="" />
        </a>
      </div>

    </div>
  );
}
