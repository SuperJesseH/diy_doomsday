import React, { Component } from 'react';

import {connect} from 'react-redux'

class DataSelector extends Component{


  render(){
    return(
      <div>I'm the Data Selector</div>
    )
  }
}


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    //
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataSelector)
