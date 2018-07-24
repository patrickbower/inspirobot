import React, { Component } from "react";

class Question extends Component {
  /**
   * Display question from bot
   */
  render() {
    return (
      <div className="speechbubble-bot">
        <p>{this.props.question}</p>
      </div>
    );
  }
}

export default Question;
