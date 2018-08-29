import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Child from "./Child.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDecrement}>-</button>
        {this.props.count}
        <button onClick={this.props.handleIncrement}>+</button>
      </div>
    );
  }
}

export default App;
