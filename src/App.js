import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
/**
  function Buy(){
    alert("You brought Anroid");
  },**/
  render() {
    return (
      <div className="App">)
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h2>Anroid - 199$</h2>
          <button>Buy</button>

              <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
              </div>

              <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                  <li>Instagram</li>
                  <li>WhatsApp</li>
                  <li>Oculus</li>
                </ul>
              </div>
        </p>
      </div>
    );
  }
}

export default App;
