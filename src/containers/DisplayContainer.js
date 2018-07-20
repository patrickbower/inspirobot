import React, { Component } from "react";

import * as userLocalStorage from "../middleware/localStorageApi";

// components
import Article from "../components/Article";

class Display extends Component {
  article() {
    var title = userLocalStorage.get("title");
    var subject = userLocalStorage.get("subject");
    var content = userLocalStorage.get("content");

    return <Article title={title} subject={subject} content={content} />;
  }

  render() {
    let { display } = this.props;
    return display ? this[display]() : false;
  }
}

export default Display;
