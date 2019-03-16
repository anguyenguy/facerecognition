import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation/>
          <Logo />
          {/*<ImageLinkForm />
          <Facerecognition /> */}
      </div>
    );
  }
}

export default App;
