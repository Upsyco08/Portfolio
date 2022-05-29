import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Education from "./Components/Education/Education";
import NavBar from "./Components/NavBar/NavBar";
import "./App.scss"
import { useState } from "react";
import Menu from "./Components/Menu/Menu";

// Added comment

function App() {
  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Education />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
