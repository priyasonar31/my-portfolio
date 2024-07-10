import './App.css';
import Home from './components/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import SkillSet  from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <SkillSet />
      <Experience />
    </div>
  );
}

export default App;
