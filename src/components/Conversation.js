// react
import React, { Component } from "react";

// styles
import "../App.css";

class DialogConversation extends Component {
  print() {
    console.log('print');
  }

  render() {
    console.log('DialogConversation', this.props.conversation);
    return this.props.render ? this.print() : false;
  }
}

export default DialogConversation;
