// react
import React, { Component } from 'react';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './actions/counting';

// styles
import './App.css';

// componants
import Counter from './components/Counter';


class App extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <div>
                <Counter />
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
