import React, { Component } from 'react';

import {connect} from 'react-redux'

class NavBar extends Component {


  render(){
    return(
      <div class="ui menu">
        <a class="item">Home</a>
        <div class="right menu">
          <a class="item">Sign Up</a>
          <a class="item">Help</a>
        </div>
      </div>
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
