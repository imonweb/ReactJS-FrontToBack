
import './App.css';
import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {

    return (
      <div className="App">    
        <Header branding="Contact Manager"/>
        <Contact name="John Doe" email="johndoe@gmail.com" phone="5555-555-555"/>
        <Contact name="Jane Doe" email="janedoe@gmail.com" phone="5555-666-666"/>
      </div>
    );
  }
}

export default App;
