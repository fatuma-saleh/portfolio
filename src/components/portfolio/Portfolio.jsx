import React from "react";
import "./portfolio.scss";
export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portofolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li> 
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src =""alt=""/>
          <h3>iCard App</h3>
        </div>
      </div>
    </div>
  );
}
