// react
import React, { Component } from 'react';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as incrementActions from '../actions/counting';

// styles
import '../App.css';

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={() => this.props.actions.incrementCounterUp(this.props.counter)}>Increase</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(incrementActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
