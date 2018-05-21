// react
import React, { Component } from "react";

// styles
import "./App.css";
import firebase from './fire';

// components
import DialogContainer from "./containers/DialogContainer";

class App extends Component {

    componentWillMount() {
        var ref = firebase.database().ref();
        ref.once("value")
            .then((snap) => {
                console.log("snap.val()", snap.val());
            });
    }

    render() {
        return (
            <div>
                <DialogContainer />
            </div>
        );
    }
}

export default App;
