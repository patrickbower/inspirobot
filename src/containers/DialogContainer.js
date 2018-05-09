// react
import React, { Component } from "react";

// middleware
import bot from "../data/bot.json";

// TODO: Write functions that respond to botActions
// import * as botActions from "../middleware/botActions";
import * as userLocalStorage from "../middleware/localStorageApi";

// components
import Conversation from "../components/Conversation";
import Question from "../components/Question";
import YesButton from "../components/YesButton";
import NoButton from "../components/NoButton";
import Input from "../components/Input";
// containers
import DisplayContainer from "./DisplayContainer";

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
      action: dialog.action || false,
      display: dialog.display || false,
      record: dialog.record || false
    });
  }

  /**
   * @param {string} reply - answer value maps to key of next dialog obj
   */
  answer = reply => {
    const nextDialogPiece = this.state[reply];
    this.setDialog(this.getDialog(nextDialogPiece));
  };

  /**
   * @param {string} value - content from Input component
   */
  input = value => {
    userLocalStorage.set(this.state.record, value);
    this.answer("input");
  };

  render() {
    // TODO: Display article before submitting
    return <React.Fragment>
        <Conversation />
        <Question question={this.state.question} />
        <DisplayContainer display={this.state.display} />
        <YesButton render={this.state.yes} answer={this.answer} />
        <NoButton render={this.state.no} answer={this.answer} />
        <Input render={this.state.input} answer={this.input} />
      </React.Fragment>;
  }
}

export default DialogContainer;


// TODO: Firebase integration to save article