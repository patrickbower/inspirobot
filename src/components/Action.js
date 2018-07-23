import React, { Component } from "react";
import * as Utils from "../utils/tools";
import ActionButton from "./ActionButton";
import firebase from "../fire";
import * as UserLocalStorage from "../middleware/localStorageApi";

class Action extends Component {
  constructor(props) {
    super(props);

    this.state = {
      useSuggestion: false,
      suggestionId: ""
    };
  }

  saveArticle() {
    const itemsRef = firebase.database().ref("article");
    itemsRef.push({
      title: UserLocalStorage.get("title"),
      content: UserLocalStorage.get("content"),
      subject: UserLocalStorage.get("subject")
    });

    if (this.state.useSuggestion) {
      this.removeSuggestion();
    }

    return false;
  }

  addSuggestion() {
    const itemsRef = firebase.database().ref("suggest");
    itemsRef.push({ title: UserLocalStorage.get("suggestion") });

    return false;
  }

  removeSuggestion() {
    const itemId = this.state.suggestionId;
    firebase
      .database()
      .ref(`/suggest/${itemId}`)
      .remove();
  }

  useSuggestion = (state, itemId) => {
    this.setState({
      useSuggestion: state,
      suggestionId: itemId
    });
  };

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
          itemId={key}
          suggestion={this.useSuggestion}
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
    console.log(this.state);
    return this.props.action ? this.createAction() : false;
  }
}

export default Action;
