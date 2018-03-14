import React, { Component } from "react";

class YesButton extends Component {
  render() {
    return <button type="button" onClick={() => this.props.answer('yes')}>Yes</button>
  }
}

export default YesButton;
