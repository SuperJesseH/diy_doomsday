import React, { Component } from 'react';

import {connect} from 'react-redux'

class NavBar extends Component {


  render(){
    return(
      <div className="ui menu">
        <a className="item">Home</a>
        <div className="right menu">
          <a className="item">Sign Out</a>
          <a className="item">Help</a>
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
