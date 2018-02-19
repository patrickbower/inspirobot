// react
import React, { Component } from "react";

// data
import BotDialog from "../data/bot-dialog.json";

// component
class DialogContainer extends Component {

  render() {
    console.log("BotDialog", BotDialog);
    return (
      <React.Fragment>
        <p>Hello world!</p>
      </React.Fragment>
    )
  }
}

export default DialogContainer;
