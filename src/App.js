import React, {Component} from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">       
        <Nav />
        <Home />
        <Resume />
        <Portfolio />
        <Education />  
        <Contact />      
      </div>          
    );
  }
}

export default App;
