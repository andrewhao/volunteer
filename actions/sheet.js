import * as types from '../constants/ActionTypes'

export function addRow() {
  return { type: types.ADD_ROW }
}

export function changeNumRowsToAdd(e) {
  let num = parseInt(e.target.value, 10)
  return { type: types.CHANGE_ROW_INCREMENT, num: num }
}
