import React, { Component } from "react";
import * as Utils from "../utils/tools";
import ActionButton from "./ActionButton";
import firebase from "../fire";
import * as UserLocalStorage from "../middleware/localStorageApi";

class Action extends Component {
  // saveArticle() {
  //   console.log("Action component - saveArticle()");
  //   return false;
  // }

  addSuggestion() {
    const itemsRef = firebase.database().ref("suggest");
    itemsRef.push({ title: UserLocalStorage.get("suggestion") });

    return false;
  }

  getSuggestion() {
    const { suggest } = this.props.data;
    const buttonsArr = [];

    for (let key in suggest) {
      buttonsArr.push(
        <ActionButton
          render={true}
          answer={this.props.answer}
          record={this.props.record}
          text={suggest[key].title}
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
