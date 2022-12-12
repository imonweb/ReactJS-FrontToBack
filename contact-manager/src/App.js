
import './App.css';
import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

class App extends Component {
  render() {

     const { email, name, phone } = this.props;

    return (
      <div className="App">    
        <Header branding="Contact Manager"/>
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
