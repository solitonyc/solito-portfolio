import React, {Component} from 'react';
import './App.css';

import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Education from './components/Education';


class App extends Component {
  render() {
    return (
      <div className="App">       
        <Nav-bar />
        <Home />
        <Resume />
        <Portfolio />
        <Education />        
      </div>          
    );
  }
}

export default App;
