import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOPen,setMenuOPen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOPen={menuOPen} setMenuOPen={setMenuOPen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
