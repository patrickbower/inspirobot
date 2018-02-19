// react
import React, { Component } from 'react';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dialogActions from './actions/dialog';

// styles
import './App.css';

// components
import DialogContainer from "./containers/DialogContainer";

class App extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <div>
                <DialogContainer />
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        dialog: state.dialog
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dialogActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
