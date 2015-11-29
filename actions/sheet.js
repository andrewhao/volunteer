import * as types from '../constants/ActionTypes'

export function addRow(num = 1) {
  return { type: types.ADD_SHEET, num }
}
