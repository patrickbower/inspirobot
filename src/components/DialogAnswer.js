// react
import React, { Component } from "react";

// styles
import "../App.css";

// component
class DialogAnswer extends Component {
  constructor(props) {
    super(props);

    console.log(props)
  }

  submit(event) {
    if (event.key === "Enter") {
        this.props.answer(event.target.value);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.question}</h1>
        <input type="text" onKeyPress={this.submit.bind(this)} />
      </div>
    );
  }
}

export default DialogAnswer;
