import React, { Component } from "react";

class Textarea extends Component {

  submit(event) {
    let { value } = event.currentTarget;
    if (event.key === "Enter" && value.length > 0) {
      this.props.answer(value);
      event.currentTarget.value = '';
    }
  }

  render() {
    return this.props.render ? (
      <React.Fragment>
        <textarea placeholder={this.props.record} type="text" className="form-control" rows="3" onKeyPress={this.submit.bind(this)} />
      </React.Fragment>
    ) : (
      false
    );
  }
}

export default Textarea;
