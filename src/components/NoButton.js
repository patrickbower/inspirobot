import React, { Component } from "react";

class YesButton extends Component {
  /**
   * @event {onclick} uses passed method to call
   * next piece of dialog
   *
   * Display no button
   */
  render() {
    return this.props.render ? (
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => this.props.answer("no")}
      >
        No
      </button>
    ) : (
      false
    );
  }
}

export default YesButton;
