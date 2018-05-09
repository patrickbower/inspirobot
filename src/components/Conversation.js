// react
import React, { Component } from "react";

// styles
import "../App.css";

class DialogConversation extends Component {
  printDialogConversation() {
    console.log(this.props.conversation);
    return false
  }

  render() {
    // console.log('DialogConversation', this.props.conversation);
    return this.props.conversation ? this.printDialogConversation() : false;
  }
}

export default DialogConversation;
