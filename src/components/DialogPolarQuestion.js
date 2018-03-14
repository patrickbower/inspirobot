import React, { Component } from "react";

class DialogPolarQuestion extends Component {
  render() {
    console.log(this.props.input)
    return (
      <React.Fragment>
        <h2>{this.props.question}</h2>
        <button type="button" onClick={() => this.props.answer('yes')}>
          Yes
        </button>
        <button type="button" onClick={() => this.props.answer('no')}>
          No
        </button>
      </React.Fragment>
    )
  }
}

export default DialogPolarQuestion;
