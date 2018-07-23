import React, { Component } from "react";
import * as UserLocalStorage from "../middleware/localStorageApi";

class ActionButton extends Component {
  render() {
    const { text, record } = this.props;
    return this.props.render ? (
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          this.props.answer("indirect", text),
            UserLocalStorage.set(record, text);
        }}
      >
        {text}
      </button>
    ) : (
      false
    );
  }
}

export default ActionButton;
