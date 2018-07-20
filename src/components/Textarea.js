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
      <textarea
        rows="6"
        className="form-control"
        onKeyPress={this.submit.bind(this)}
        placeholder={"New blog article " + this.props.record}
      />
    ) : (
      false
    );
  }
}

export default Input;
