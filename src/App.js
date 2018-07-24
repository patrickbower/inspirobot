// react
import React, { Component } from "react";

// styles
import "./App.css";

// components
import firebase from "./fire";
import DialogContainer from "./containers/DialogContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  /* Firebase data fetch
   *
   * TODO: This dataset is essentially static. Although the app 
   * will manipulate this data use it to create interfaces it 
   * doesn't reflect all changes until the page is refreshed
   */

  componentWillMount() {
    var ref = firebase.database().ref();
    ref.once("value").then(snapshot => {
      const data = snapshot.val();
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
