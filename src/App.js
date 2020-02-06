import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/resume.min.css';
import Navigate from './components/navbar';
import kuva from './assets/img/profile.jpg'
import DataHandler from './components/navbar';
import TheCv from './components/Thecv';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin,faPython  } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="App">

    <TheCv />
    </div>
  );
}

export default App;
