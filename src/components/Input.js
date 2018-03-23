import React, { Component } from "react";

class Input extends Component {

  submit(event) {
    let {value} = event.currentTarget;
    if (event.key === "Enter" && value.length > 1) {
      this.props.input(value);
    }
  }

  render() {
    return this.props.render ? <input type="text" onKeyPress={this.submit.bind(this)} /> : false;
  }
}

export default Input;
