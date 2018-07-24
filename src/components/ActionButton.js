import React, { Component } from "react";
import * as UserLocalStorage from "../middleware/localStorageApi";

class ActionButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * @function handleClick
   *
   * Bundled methods
   * 1.Give answer to call next piece of dialog
   * 2.Add suggestion title
   * 3.Store the id ready to manipulate firebase when completed
   */
  handleClick() {
    const { text, record } = this.props;
    // 1
    this.props.answer("indirect", text);
    // 2
    UserLocalStorage.set(record, text);
    // 3
    this.props.suggestion(true, this.props.itemId);
  }

  render() {
    return this.props.render ? (
      <button
        type="button"
        className="btn btn-secondary"
        onClick={this.handleClick}
      >
        {this.props.text}
      </button>
    ) : (
      false
    );
  }
}

export default ActionButton;
