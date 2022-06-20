import React from "react";
import "./works.scss";
export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="docs/iCard.png" alt="" />
                </div>
                <h2>iCard</h2>
                <p>
                  iCard is a single-page application (SPA) that allows users to
                  create digital business cards, and share it to others through
                  an auto generated QR code. The front end of this project is
                  built with React and makes requests to an API to fetch and
                  store appointment data from a database.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="docs/iCard.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="docs/arrow.png"className="arrow left" alt="" />
      <img src="docs/arrow.png"className="arrow right" alt="" />

    </div>
  );
}
