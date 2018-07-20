import React, { Component } from "react";

class Question extends Component {
  render() {
    return (
      <div className="speechbubble-bot">
        <p>{this.props.question}</p>
      </div>
    );
  }
}

export default Question;
