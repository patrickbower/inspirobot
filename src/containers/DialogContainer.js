// react
import React, { Component } from "react";

// middleware
import bot from "../data/bot.json";
import * as botActions from "../middleware/botActions";

// components
import Conversation from "../components/Conversation";
import Question from "../components/Question";
import YesButton from "../components/YesButton";
import NoButton from "../components/NoButton";
import Input from "../components/Input";

// component
class DialogContainer extends Component {
  constructor() {
    super();

    this.state = {
      question: false,
      yes: false,
      no: false,
      input: false,
      action: false
    };
  }

  componentDidMount() {
    this.setDialog(this.getDialog(`intro`));
  }

  getDialog(title) {
    return bot[title];
  }

  setDialog(dialog) {
    this.setState({
      question: dialog.question || false,
      yes: dialog.answer.yes || false,
      no: dialog.answer.no || false,
      input: dialog.answer.input || false,
      action: dialog.action || false
    });
  }

  answer = reply => {
    const nextDialogPiece = this.state[reply];
    this.setDialog(this.getDialog(nextDialogPiece));
  };

  input = actionType => {
    console.log("input", actionType);
  };

  render() {
    return (
      <React.Fragment>
        <Conversation />
        <Question question={this.state.question} />
        <YesButton render={this.state.yes} answer={this.answer} />
        <NoButton render={this.state.no} answer={this.answer} />
        <Input render={this.state.input} answer={this.input} />
      </React.Fragment>
    );
  }
}

export default DialogContainer;
