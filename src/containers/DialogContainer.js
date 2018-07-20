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
import Textarea from "../components/Textarea";
import Action from "../components/Action";
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
      textarea: false,
      action: false,
      display: false,
      value: false,
      record: false,
      conversation: false
    };
  }

  /**
   * @function componentDidMount
   *
   * Lets kick this thing off.
   */
  componentDidMount() {
    this.setDialog(this.getDialog(`intro`));
  }

  /**
   * @function componentDidUpdate
   *
   * Each time we change dialog page scroll to the bottom
   */
  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  /**
   * @function getDialog
   * @param {string} title - key of bot json schema
   * @returns {object} - piece of bot json schema
   *
   * Find next piece of dialog.
   */
  getDialog(title) {
    return bot[title];
  }

  /**
   * @function setDialog
   * @param {object} dialog - piece of bot json schema
   *
   * Set boolean values to render only the components
   * we need for this piece of dialog.
   */
  setDialog(dialog) {
    // console.log(dialog);
    this.setState({
      question: dialog.question || false,
      yes: dialog.answer.yes || false,
      no: dialog.answer.no || false,
      indirect: dialog.answer.indirect || false,
      input: dialog.answer.input || false,
      textarea: dialog.answer.textarea || false,
      action: dialog.action || false,
      record: dialog.record || false,
      display: dialog.display || false
    });
  }

  /**
   * @function setConversationDialog
   * @param {string} currentValue - users input value
   *
   * Record the conversation for playback on render.
   */
  setConversationDialog(currentValue) {
    this.setState({
      conversation: [
        ...this.state.conversation,
        { bot: this.state.question },
        { user: currentValue }
      ]
    });
  }

  /**
   * @function answer
   * @param {string} currentValue - answer currentValue maps to key of next dialog obj
   * @param {string} dialogValue - record of conversation printed in app
   *
   * Call the next piece of dialog associated with
   * the 'yes' or 'no' key on the current bot json object.
   */
  answer = (currentValue, dialogValue) => {
    const dialog = dialogValue === undefined ? currentValue : dialogValue;
    this.setConversationDialog(dialog);
    const nextDialogPiece = this.state[currentValue];
    this.setDialog(this.getDialog(nextDialogPiece), currentValue);
  };

  /**
   * @function input
   * @param {string} currentValue - content from Input component
   *
   * Add currentValue to localStorage then Call the next
   * piece of dialog associated with the 'input' key on
   * the current bot json object.
   */
  input = currentValue => {
    this.setConversationDialog(currentValue);
    userLocalStorage.set(this.state.record, currentValue);
    const nextDialogPiece = this.state["input"] || this.state["textarea"];
    this.setDialog(this.getDialog(nextDialogPiece), currentValue);
  };

  render() {
    return (
      <React.Fragment>
        <main className="main">
          <Conversation conversation={this.state.conversation} />
          <Question question={this.state.question} />
          <DisplayContainer display={this.state.display} />
          <Action
            action={this.state.action}
            data={this.props.data}
            answer={this.answer}
          />
          <div className="input-buttons">
            <NoButton render={this.state.no} answer={this.answer} />
            <YesButton render={this.state.yes} answer={this.answer} />
          </div>
        </main>
        <div className="input-text">
          <Input
            render={this.state.input}
            answer={this.input}
            record={this.state.record}
          />
          <Textarea
            render={this.state.textarea}
            answer={this.input}
            record={this.state.record}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DialogContainer;
