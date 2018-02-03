// react
import React, { Component } from "react";

// data
import BotGreeting from "../data/bot-dialog.json";

// component
class DialogGreetingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { question: null };
  }

  currentTime() {
    // const time = new Date();
    // moment.js
    // what quarter of the day is it
    // return the right string
  }

  componentDidMount() {
    this.setState({
      question: null ? false : BotGreeting.greeting.question.morning
    });
  }

  render() {
    return <p>{ this.state.question }</p>;
  }
}

export default DialogGreetingContainer;
