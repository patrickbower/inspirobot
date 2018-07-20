import React, { Component } from "react";

class ActionButton extends Component {
  render() {
    return this.props.render ? (
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => this.props.answer("indirect", this.props.text)}
      >
        {this.props.text}
      </button>
    ) : (
      false
    );
  }
}

export default ActionButton;
