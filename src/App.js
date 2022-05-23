import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import TopBar from "./Components/TopBar/TopBar";
import Works from "./Components/Works/Works";
import "./App.scss"
import { useState } from "react";
import Menu from "./Components/Menu/Menu";

// Added comment

function App() {
  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
