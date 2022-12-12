import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {

    return (
      <div className="App">    
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
