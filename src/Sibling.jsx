import React from "react";

export default class Sibling extends React.Component {
  state = {
    count: 9
  };
  render() {
    return <div>{this.props.count} sibling</div>;
  }
}
