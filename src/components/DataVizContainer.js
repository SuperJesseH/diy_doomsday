import React, { Component } from 'react';
import {connect} from 'react-redux'

class DataVizContainer extends Component {


  render(){
    return(
      <div>This Is the Dataviz Container</div>
    )
  }


}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataVizContainer)
