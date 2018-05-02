import React, { Component } from "react";

class Content extends Component {
  render() {
    return this.props.render ? <h1>This is static content</h1> : false;
  }
}

export default Content;
