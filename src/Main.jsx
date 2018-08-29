import React from "react";
import App from "./App.jsx";
import Sibling from "./Sibling.jsx";
import Footer from "./Footer.jsx";

export default class Main extends React.Component {
  state = {
    count: 0
  };

  incre = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decr = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="container">
        <App
          handleIncrement={this.incre}
          handleDecrement={this.decr}
          count={this.state.count}
        />
        <Sibling count={this.state.count} />

        <Footer count={this.state.count} />
      </div>
    );
  }
}
