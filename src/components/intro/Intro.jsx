import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,

      strings: ["Back-End", "Front-End", "Full-Stack"],
    });
  }, []);
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
          <h3>
            Web Developer<span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="docs/arrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}
