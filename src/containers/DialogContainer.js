// react
import React, { Component } from "react";

// data
import BotDialog from "../data/bot-dialog.json";

// components
import DialogGreetingContainer from "./DialogGreetingContainer";
import DialogAnswer from "../components/DialogAnswer";

// component
class DialogContainer extends Component {

  constructor(props){
    super(props);
    console.log("BotDialog", BotDialog);
    this.state = { question: null };
  }

  componentDidMount(){
    this.setState({
      question: null ? false : <DialogGreetingContainer />
    })
  }

  answer(string) {
    console.log(string);
  }

  render() {
    return <DialogAnswer question={this.state.question} answer={this.answer} />;
  }
}

export default DialogContainer;
