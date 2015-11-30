import React, { Component, PropTypes } from 'react'
import { dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SheetActions from '../actions/sheet'

class App extends Component {
  render() {
    const { sheets, actions } = this.props
    return (
      <div>
        <p>Rows {sheets.rows}</p>
        <input type="text" onChange={actions.changeNumRowsToAdd} value={sheets.numRowsToAdd} />
        <a href="#" onClick={actions.addRow}>Add Row</a>
        <table>
        <tbody>
          {sheets.rows.map(function(row) {
            return(<tr>
                     <td>cell</td>
                   </tr>) })}
                   </tbody>
        </table>
      </div>
    )
  }
}

App.propTypes = {
  sheets:       PropTypes.object.isRequired,
  actions:      PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    sheets: state.sheets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SheetActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
