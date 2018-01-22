import {
  INCREMENT_COUNTER_UP
} from '../actions/ActionTypes'

function counter(state = { counter: 0 }, action) {
  switch (action.type) {
    case INCREMENT_COUNTER_UP:
      return state + 1
    default:
      return state
  }
}

export default counter
