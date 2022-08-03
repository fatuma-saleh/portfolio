import React, { useState } from "react";
import "./works.scss";
const data = require("../../data");
export default function Works() {
  const [currentSlide, setCurrrentSlide] = useState(0);
  const handleclick = (direction) => {
    direction === "left"
      ? setCurrrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrrentSlide(currentSlide < data.length-1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                  <a href={d.Project}>Project</a>
                 
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="docs/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleclick("left")}
      />
      <img
        src="docs/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleclick("right")}
      />
    </div>
  );
}
