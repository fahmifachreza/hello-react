import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    items: [],
    newItemText: ""
  };

  constructor (props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.updateNewItemValue = this.updateNewItemValue.bind(this);
  }

  componentDidMount() {
    this.setState({ items: [
      "Buy new mouse and keyboard",
      "Call ISP for better internet",
      "???",
      "PROFIT!"
    ] });
  }

  addItem (event) {
    if (event.key === "Enter") {
      const newItems = this.state.items.concat(this.state.newItemText);
      this.setState({ 
        items: newItems,
        newItemText: ""
      });
    }
  }

  updateNewItemValue (event) {
    this.setState({ newItemText: event.target.value });
  }

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
            { this.state.items.map((item, index) => <li key={`item-${index}`}>{ item }</li>) }
          </ul>

          <footer>
            <label htmlFor="new-item">New Item: </label>
            <input type="text" 
                   id="new-item"
                   placeholder="Add Item..."
                   onChange={this.updateNewItemValue}
                   onKeyUp={this.addItem}
                   value={this.state.newItemText} />

            <p>Content is: {this.state.newItemText}</p>
          </footer>
        </content>
      </div>
    );
  }
}

export default App;
