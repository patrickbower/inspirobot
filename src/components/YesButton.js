import React, { Component } from "react";

class YesButton extends Component {
  render() {
    return this.props.render ? <button type="button" onClick={() => this.props.answer('yes')}>Yes</button> : false;
  }
}

export default YesButton;
