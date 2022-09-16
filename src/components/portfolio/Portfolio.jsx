import React from "react";
import "./portfolio.scss";
// import JavascriptIcon from "@mui/icons-material/Javascript";
// import HtmlIcon from "@mui/icons-material/Html";
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              Javascript
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/Java">
              Java
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/Node.js">Node.js</a>
          </li>
          <li>
            <a href="https://reactjs.org/docs/getting-started.html">React</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>
          </li>
          <li>
            <a href="https://sass-lang.com/guide">
              Sass
            </a>
          </li>
          <li>
            <a href="https://udn.realityripple.com/docs/Glossary/Ruby">
              Ruby On Rails
            </a>
          </li>
          <li>
            <a href="https://dev.mysql.com/doc/">
              Mysql
            </a>
          </li>

          <li>
            <a href="https://www.postgresql.org/docs/current/index.html">
              PosgreSQL
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
