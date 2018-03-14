// react
import React, { Component } from "react";

// data
import Bot from "../data/bot.json";

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
      question: "",
      answer: "",
      input: ""
    };
  }

  componentDidMount() {
    this.setDialog(this.getDialog(`intro`));
  }

  getDialog(title) {
    return Bot[title];
  }

  setDialog(dialog) {
    this.setState({
      question: dialog.question || "",
      answer: dialog.answer || "",
      input: dialog.input || ""
    });
  }

  answer = (reply) => {
    const nextDialogPiece = this.state.answer[reply];
    this.setDialog(this.getDialog(nextDialogPiece));
  }

  input = () => {
    console.log('input')
  }

  render() {
    console.log(this.state.answer)
    return (
      <React.Fragment>
        <Conversation />
        <Question question={this.state.question} />
        <YesButton answer={this.answer} />
        <NoButton answer={this.answer} />
        <Input answer={this.input} />
      </React.Fragment>
    );
  }
}

export default DialogContainer;
