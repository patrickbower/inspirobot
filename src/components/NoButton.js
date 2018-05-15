import React, { Component } from "react";

class YesButton extends Component {
  type() {
    if (this.props.render === 'restart') {
      return <button className="btn btn-link btn-sm p-0" type="button" onClick={() => this.props.answer('no')}>Start again</button>
    } else {
      return <button className="btn btn-primary" type="button" onClick={() => this.props.answer('no')}>No</button>
    }
  }

  render() {
    return this.props.render ? this.type() : false;
  }
}

export default YesButton;
