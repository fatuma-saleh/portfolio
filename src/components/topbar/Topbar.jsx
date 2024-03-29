import React from "react";
import "./topbar.scss";
import { Person, Mail, LinkedIn} from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            F.S
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1647-293-8566</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>sfatex@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/fatumasaleh">
              <LinkedIn className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/fatuma-saleh">
              <GitHubIcon className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
