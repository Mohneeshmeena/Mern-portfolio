import './App.scss';
import Main from './components/MMain'
import Certificate from './components/Mcertificates'
import Project from './components/Mproject'
import About from './components/Mabout'
import Contact from './components/Mcontact'
import Details from './components/Mdetails'
import Practise from './components/Practise';
import Navbar from './navbar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route exact path='/certificates' element={<Certificate></Certificate>} />
          <Route exact path='/project' element={<Project></Project>} />
          <Route exact path='/about' element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all" element={< Practise/>} />
          <Route exact path='/main' element={<Main />} />
          <Route exact path='/navbar' element={<Navbar />} />
        

        </Routes>
      </div>
    </Router>




  );
}

export default App;
