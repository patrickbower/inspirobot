import {
  ADD_DIALOG_ITEM
} from '../actions/ActionTypes'

function DIALOG(state, action) {
  switch (action.type) {
    case ADD_DIALOG_ITEM:
      return Object.assign({}, state, {
        dialog: action.dialog
      });
    default:
      return state
  }
}

export default dialog
