import './App.scss';
import Main from './components/MMain'
import Certificate from './components/Mcertificates'
import Project from './components/Mproject'
import About from './components/Mabout'
import Contact from './components/Mcontact'
import Slidebar from './components/Sidebar'
import Layout from './components/Layout'
import Details from './components/Mdetails'


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
          <Route exact path='/slidebar' element={<Slidebar></Slidebar>} />
          <Route exact path='/project' element={<Project></Project>} />
          <Route exact path='/layout' element={<Layout />} />
          <Route exact path='/about' element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path='/' element={<Main />} />
        

        </Routes>
      </div>
    </Router>




  );
}

export default App;
