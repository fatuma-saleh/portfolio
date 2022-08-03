import { useEffect, useRef } from "react";
import "./intro.scss";
// import { init } from "ityped";
import Typewriter from "typewriter-effect";

export default function Intro() {
  // const textRef = useRef();

  //useEffect(() => {
  // console.log("++++)))))", textRef);
  // init(textRef.current, {
  //   showCursor: true,
  //   backDelay: 1500,
  //   backSpeed: 30,
  //   strings: ['Back End','Front End','Full Stack'],

  // });

  // }, []);
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
          <h2>Web Developer</h2>

          <h3>
            {" "}
            <Typewriter
              options={{
                autoStart: true,
                delay: 75,
                loop: true,
                strings: ["Back End", "Front End", "Full Stack"],
              }}
            />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="docs/arrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}
