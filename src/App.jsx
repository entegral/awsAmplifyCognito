import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginContainer from './LoginContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <LoginContainer/>
      </React.Fragment>
    );
  }
}

export default App;