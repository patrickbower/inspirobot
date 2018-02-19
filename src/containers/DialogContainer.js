// react
import React, { Component } from "react";

// data
import BotDialog from "../data/bot-dialog.json";
import BotListeners from "../data/bot-listeners.json";
import BotFunctions from "../data/bot-functions.json";

// components
import DialogPolarQuestion from "../components/DialogPolarQuestion";
import DialogConversation from "../components/DialogConversation";

// component
class DialogContainer extends Component {
  constructor() {
    super();

    this.state = {
      question: "",
      answer: ""
    };
  }

  componentDidMount() {
    const initialDialog = this.getDialog(`intro`);
    this.setState({
      question: initialDialog.question,
      answer: initialDialog.answer
    });
  }

  getDialog(title) {
    return BotDialog[title];
  }

  answerYes() {
      console.log('yes');
      
  }

  answerNo() {
      console.log('No');
      
  }

  render() {
    return (
      <React.Fragment>
        <DialogConversation />
        <DialogPolarQuestion
          question={this.state.question}
          answerYes={this.answerYes}
          answerNo={this.answerNo}
        />
      </React.Fragment>
    );
  }
}

export default DialogContainer;
