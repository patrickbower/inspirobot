// react
import React, { Component } from "react";

// styles
import "./App.css";
import firebase from "./fire";

// components
import DialogContainer from "./containers/DialogContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    var ref = firebase.database().ref();
    ref.once("value").then(snap => {
      const data = snap.val();
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        <DialogContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
