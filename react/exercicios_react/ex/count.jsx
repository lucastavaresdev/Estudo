import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './countReducer'

const Counter = (props) => (
    <div>Ok</div>
)


const mapStateToProps = state => ({ count: state.count })
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch)

export default Counter