import React, { Component } from "react";

class DialogPolarQuestion extends Component {
    render() {
        return <React.Fragment>
            <h2>{this.props.question}</h2>
            <button type="button" onClick={this.props.answerYes}>
              Yes
            </button>
            <button type="button" onClick={this.props.answerNo}>
              No
            </button>
          </React.Fragment>;
    }
}

export default DialogPolarQuestion;
