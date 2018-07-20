import React, { Component } from "react";

class Input extends Component {
  submit(event) {
    let { value } = event.currentTarget;
    if (event.key === "Enter" && value.length > 0) {
      this.props.answer(value);
      event.currentTarget.value = "";
    }
  }

  render() {
    return this.props.render ? (
      <input
        type="text"
        className="form-control"
        onKeyPress={this.submit.bind(this)}
        placeholder={
          this.props.record
            ? "New blog article " + this.props.record
            : "How can I help?"
        }
      />
    ) : (
      false
    );
  }
}

export default Input;
