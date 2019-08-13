import React, {Component} from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Summary from './components/Summary';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">       
        <Nav />
        <Home />
        <Skills />
        <Summary />
        <Resume />
        <Portfolio /> 
        <Contact />  
        <Footer />    
      </div>          
    );
  }
}

export default App;
