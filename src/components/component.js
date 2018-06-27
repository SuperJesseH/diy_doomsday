import React, { Component } from 'react';
import {connect} from 'react-redux'

class Component extends Component {


  render() {
    this.props.functionName(this.props.key)
    return (

    )
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    //"function name is a placeholder for a useful action "
    functionName: paramater => {
      dispatch({type: "ACTION_TYPE", payload: paramater})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
