import React from "react";
import "./topbar.scss";
import { Person,Mail } from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Intro
          </a>
          <div className="itemContainer">
            <Person  className="icon"/>
            <span>+1-647-293-8566</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>sfatex@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
