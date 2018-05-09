import React, { Component } from "react";

class Article extends Component {
  render() {
    return <React.Fragment>
        <h1>{this.props.title}</h1>
        <h5>{this.props.subject}</h5>
        <p>{this.props.content}</p>
      </React.Fragment>;
  }
}

export default Article;
