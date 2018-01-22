import * as types from './ActionTypes'

export function incrementCounterUp(counter){
  return {
    type: types.INCREMENT_COUNTER_UP,
    counter
  }
}
