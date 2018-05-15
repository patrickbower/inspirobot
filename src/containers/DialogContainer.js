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
      action: false,
      display: false,
      value: false,
      record: false,
      conversation: false
    };
  }

  componentDidMount() {
    this.setDialog(this.getDialog(`intro`));
  }

  getDialog(title) {
    return bot[title];
  }

  setDialog(dialog, currentValue) {
    this.setState({
      question: dialog.question || false,
      yes: dialog.answer.yes || false,
      no: dialog.answer.no || false,
      input: dialog.answer.input || false,
      action: dialog.action || false,
      record: dialog.record || false,
      display: dialog.display || false
    });
  }

  setConversationDialog(currentValue) {
    this.setState({
      conversation: [...this.state.conversation, 
        { bot: this.state.question },
        { user: currentValue }
      ]
    });
  }

  /**
   * @param {string} currentValue - answer currentValue maps to key of next dialog obj
   */
  answer = currentValue => {
    this.setConversationDialog(currentValue);
    // Call the next piece of dialog associated with 
    // the 'yes' or 'no' key on the current bot json object.
    const nextDialogPiece = this.state[currentValue];
    this.setDialog(this.getDialog(nextDialogPiece), currentValue);
  };

  /**
   * @param {string} currentValue - content from Input component
   */
  input = currentValue => {
    this.setConversationDialog(currentValue);
    // Add currentValue to localStorage
    userLocalStorage.set(this.state.record, currentValue);
    // Call the next piece of dialog associated with 
    // the 'input' key on the current bot json object.
    const nextDialogPiece = this.state['input'];
    this.setDialog(this.getDialog(nextDialogPiece), currentValue);
  };

  render() {
    return <React.Fragment>
        <main className="main"> 
          <Conversation conversation={this.state.conversation}/>
          <Question question={this.state.question} />
          <DisplayContainer display={this.state.display} />
          <div className="user-input">
            <Input render={this.state.input} answer={this.input} record={this.state.record} />
            <NoButton render={this.state.no} answer={this.answer} />
            <YesButton render={this.state.yes} answer={this.answer} />
          </div>
        </main>
      </React.Fragment>;
  }
}

export default DialogContainer;