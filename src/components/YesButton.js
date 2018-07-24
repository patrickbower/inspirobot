import React, { Component } from "react";

class YesButton extends Component {
  /**
   * @event {onclick} uses passed method to call
   * next piece of dialog
   *
   * Display yes button
   */
  render() {
    return this.props.render ? (
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => this.props.answer("yes")}
      >
        Yes
      </button>
    ) : (
      false
    );
  }
}

export default YesButton;
