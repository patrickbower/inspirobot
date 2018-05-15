import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <div className="article">
        <h1 className="h4">{this.props.title}</h1>
        <p>{this.props.content}</p>
        <small className="text-muted">{this.props.subject}</small>
      </div>
    )
  }
}

export default Article;
