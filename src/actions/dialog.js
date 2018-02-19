import * as types from './ActionTypes'

export function addDialogPiece(dialog){
  return { 
      type: types.ADD_DIALOG_ITEM, 
      dialog 
    };
}
