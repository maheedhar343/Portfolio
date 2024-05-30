import Nav  from "./components/Navbar/Nav.js"
import Intro from './components/Intro/intro.js';
import Skill from './components/skill/skill.js';
import Work from './components/work/work.js';
import Client from './components/clients/client.js'
import {Contact} from './components/contact/contact.js';
import '../src/input.css'
function App() {
  return (
    <div className="App">
     <Nav/>
     <Intro/>
     <Skill/>
     <Work/>
     <Client />
     <Contact/>
     
    </div>
  );
}

export default App;
