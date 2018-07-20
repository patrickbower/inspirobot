import React, { Component } from "react";
import * as Utils from "../utils/tools";

import ActionButton from "./ActionButton";

class Action extends Component {
  // saveArticle() {
  //   console.log("Action component - saveArticle()");
  //   return false;
  // }

  // addSuggestion() {
  //   console.log("Action component - addSuggestion");
  //   return false;
  // }

  constructor(props) {
    super(props);

    this.state = {
      trigger: undefined
    };
  }

  // TODO: Need to be able to add the name of the suggestion
  // into the input and store the key of the suggestion in the
  // data so we can ajax remove it from the suggest list.
  getSuggestion() {
    const { suggest } = this.props.data;
    const buttonsArr = [];
    for (let key in suggest) {
      buttonsArr.push(
        <ActionButton
          render={true}
          answer={this.props.answer}
          text={suggest[key]}
          key={key}
        />
      );
    }

    return <div className="input-buttons">{buttonsArr}</div>;
  }

  createAction() {
    const actionCall = Utils.dashToCamelCase(this.props.action);
    return this[actionCall]();
  }

  render() {
    return this.props.action ? this.createAction() : false;
  }
}

export default Action;
