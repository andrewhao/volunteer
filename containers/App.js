import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import Sheet from '../components/sheet'
import * as SheetActions from '../actions/sheet'

class App extends Component {
  render() {
    const { sheet, actions } = this.props
    return (
      <div>
        <p>Hello!</p>
      </div>
    )
  }
}

//App.propTypes = {
//  todos: PropTypes.array.isRequired,
//  actions: PropTypes.object.isRequired
//}

function mapStateToProps(state) {
  return {
    sheet: state.sheet
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
