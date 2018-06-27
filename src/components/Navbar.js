import React, { Component } from 'react';

import {connect} from 'react-redux'

class NavBar extends Component {


  render(){
    return(
      <div>I'm the NavBar</div>
    )
  }
}


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) =>{
  return {
    //
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
