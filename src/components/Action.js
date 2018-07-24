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

  /**
   * @function saveArticle
   *
   * Add new article content from local storage into
   * the firebase database.
   */
  saveArticle() {
    const itemsRef = firebase.database().ref("article");
    itemsRef.push({
      title: UserLocalStorage.get("title"),
      content: UserLocalStorage.get("content"),
      subject: UserLocalStorage.get("subject")
    });

    // remove item from suggestion list if from bot
    if (this.state.useSuggestion) {
      this.removeSuggestion();
    }

    return false;
  }

  /**
   * @function addSuggestion
   *
   * Add new suggestion from local storage
   */
  addSuggestion() {
    const itemsRef = firebase.database().ref("suggest");
    itemsRef.push({ title: UserLocalStorage.get("suggestion") });

    return false;
  }

  /**
   * @function removeSuggestion
   *
   * Remove suggestion from firebase
   */
  removeSuggestion() {
    const itemId = this.state.suggestionId;
    firebase
      .database()
      .ref(`/suggest/${itemId}`)
      .remove();
  }

  /**
   * @function useSuggestion
   *
   * Manipulate state if suggestion item is clicked
   */
  useSuggestion = (state, itemId) => {
    this.setState({
      useSuggestion: state,
      suggestionId: itemId
    });
  };

  /**
   * @function getSuggestion
   * @return {object} JSX list of buttons
   *
   * Create UI list of suggestions as buttons
   */
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

  /**
   * @function createAction
   *
   * Create and call dynamic method
   */
  createAction() {
    const actionCall = Utils.dashToCamelCase(this.props.action);
    return this[actionCall]();
  }

  render() {
    return this.props.action ? this.createAction() : false;
  }
}

export default Action;
