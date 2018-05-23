import React, { Component } from "react";

class Input extends Component {

  submit(event) {
    let { value } = event.currentTarget;
    if (event.key === "Enter" && value.length > 0) {
      this.props.answer(value);
      event.currentTarget.value = "";
    }
  }

  // render() {
  //   return this.props.render ? (
  //     <React.Fragment>
  //       <div className="flag">{this.props.record}</div>
  //       <textarea type="text" className="form-control" rows="3" onKeyPress={this.submit.bind(this)} />
  //     </React.Fragment>
  //   ) : (
  //     false
  //   );
  // }
  render() {
    return <input 
              type="text"
              className="form-control" 
              onKeyPress={this.submit.bind(this)} 
              placeholder={this.props.record?'Add ' + this.props.record:'How can I help?'}
            />
  }
}

export default Input;
