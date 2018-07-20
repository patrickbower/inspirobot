import React, { Component } from "react";
import * as Utils from "../utils/tools";

class Action extends Component {
  saveArticle() {
    console.log("Action component - saveArticle()");
    return false;
  }

  getSuggestion() {
    // TODO: Primary - when clicking the button for a suggested topic
    // we would expect to see the input field populated with the
    // item just clicked. This could be a list of Yes component
    // buttons so we have dont have specialist functionality - instead
    // its the normal way to move through dialog.
    const { suggest } = this.props.data;
    return Object.values(suggest).map((value, index) => {
      return (
        <button
          className="btn btn-primary"
          type="button"
          key={index}
          onClick={() => this.props.answer("yes")}
        >
          {value}
        </button>
      );
    });
  }

  addSuggestion() {
    console.log("Action component - addSuggestion");
    return false;
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
