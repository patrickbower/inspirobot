// react
import React, { Component } from "react";

// styles
import "../App.css";

class DialogConversation extends Component {
  printDialogConversation() {
    return this.props.conversation.map((item, index) => {
      let key = Object.keys(item).pop();
      return (
        <div key={index} className={key === 'bot' ? 'speechbubble-bot' : 'speechbubble-user'}>
          <p>{item[key]}</p>
        </div>
        );
    });
  }

  render() {
    return this.props.conversation ? this.printDialogConversation() : false;
  }
}

export default DialogConversation;
