import "./App.css";
import Home from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import SkillSet from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";
import { BoxAnimation } from "./components/BoxAnimation/BoxAnimation";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Home />
        <SkillSet />
        <Experience />
        <Contact />
        <Footer />
        <BoxAnimation />
      </div>
    </>
  );
}

export default App;
