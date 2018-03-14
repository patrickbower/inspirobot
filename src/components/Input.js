import React, { Component } from "react";

class Input extends Component {
  render() {
    return <input type="text" onClick={this.props.input} />
  }
}

export default Input;
