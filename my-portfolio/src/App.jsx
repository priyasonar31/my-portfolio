import "./App.css";
import Home from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import SkillSet from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
<div className="App">
      <Home />
      <SkillSet />
      <Experience />
      <Contact />
    </div>
    </>
  );
}

export default App;
