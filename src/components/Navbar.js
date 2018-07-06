import React, { Component } from 'react';

import {connect} from 'react-redux'

import logo from '../logo2.png'

class NavBar extends Component {


  render(){

    return(
      <div className="ui menu">
          <img alt="DIY Doom Index" src={logo} style={{width: 294, height:100, borderRadius:4}}></img>
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
