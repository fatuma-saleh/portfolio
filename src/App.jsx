
import './App.css';
import Intro from './components/intro/Intro';
import Topbar from './components/topbar/Topbar';

import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="app">
      
    <Topbar/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Contact/>
      
    </div>
    </div>
  );
}

export default App;
