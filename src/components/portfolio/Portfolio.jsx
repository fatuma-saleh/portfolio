import React from "react";
import "./portfolio.scss";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="left">
        <h1>About</h1>
        <p>
          &nbsp;&nbsp;&nbsp;My name is Fatuma. Currently, I am looking for a
          Junior Full Stack Developer role. My communication skills developed as
          a manager and business owner led to software development and now I
          enjoy creating applications that connect the interface with the user.
          My strength is my ability to truly understand what the end-user wants
          and work closely with the product team to create a delightful user
          experience. I am hardworking and eager to learn. My goal is to be a
          Lead Full Stack Developer.What I am looking for is companies where I
          can add value to and join a strong team that delivers core
          customer-facing features.
        </p>
      </div>

      <div className="right">
        <h1>My Skillset</h1>
        <ul className="skills">
          <li>
            {" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <JavascriptIcon className="icon" />
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Java">Java</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/">Node.js</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              React
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <HtmlIcon className="icon" />
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">CSS</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Sass</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              Ruby On Rails
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              Mysql
            </a>
          </li>
          <li></li>
          <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            PosgreSQL
          </a>
          </li>
          <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            Github
          </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
