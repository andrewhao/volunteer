import { CHANGE_ROW_INCREMENT, REMOVE_ROW, ADD_ROW } from '../constants/ActionTypes'

const initialState = {
  rows: ['row'],
  numRowsToAdd: 1
}

export default function sheets(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROW_INCREMENT:
      console.log(`Changing row add constant to ${action.num} rows.`)
      return Object.assign({}, state, {numRowsToAdd: action.num})
    case ADD_ROW:
      console.log(`Adding an extra ${state.numRowsToAdd} rows.`)
      let rows = state.rows;
      for(let i = 0; i < state.numRowsToAdd; i++) {
        rows = rows.concat(['row']);
      }
      return Object.assign({}, state, { rows: rows })
    default:
      return state;
  }
}
