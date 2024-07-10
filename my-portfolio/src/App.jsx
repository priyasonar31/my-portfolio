import './App.css';
import Home from './components/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import SkillSet  from './components/Skills/Skills'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <SkillSet />
    </div>
  );
}

export default App;
