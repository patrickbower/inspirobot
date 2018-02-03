// react
import React, { Component } from 'react';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './actions/counting';

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
        count: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
