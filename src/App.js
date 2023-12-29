import Nav  from "./components/Navbar/Nav.js"
import Intro from './components/Intro/intro.js';
import Skill from './components/skill/skill.js';
import Work from './components/work/work.js';
import {Contact} from './components/contact/contact.js';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Intro/>
     <Skill/>
     <Work/>
     <Contact/>
     
    </div>
  );
}

export default App;
