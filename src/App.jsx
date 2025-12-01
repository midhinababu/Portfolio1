
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbarheader from './components/Navbarheader';
import Headsection from './components/headsection';
import Skill from './components/Skill';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
 
  return (
    <>
   <Navbarheader/> 
      <Headsection/>
       <Education/>  
        <Skill/>
       <Footer/>
    </>
  )
}

export default App
