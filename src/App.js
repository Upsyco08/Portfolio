import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import TopBar from "./Components/TopBar/TopBar";
import Works from "./Components/Works/Works";
import "./App.scss"

// Added comment
function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Works />
      </div>
    </div>
  );
}

export default App;
