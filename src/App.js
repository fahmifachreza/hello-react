import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo List</h2>
        </div>

        <content className="App-content">
          <header>
            <label htmlFor="filter">Filter Items: </label>
            <input type="text" id="filter" placeholder="Filter..." />
          </header>

          <ul id="todo-list">
            <li>Buy new mouse and keyboard</li>
            <li>Call ISP for better internet</li>
            <li>???</li>
            <li>PROFIT!</li>
          </ul>

          <footer>
            <label htmlFor="new-item">New Item: </label>
            <input type="text" id="new-item" placeholder="Add Item..." />
          </footer>
        </content>
      </div>
    );
  }
}

export default App;
