import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from '../logo2.png'
import {toggleLogin} from '../actions/action'

class NavBar extends Component {
  // renders a very basic nav bar

handleClick = (e) =>{
  localStorage.clear()
  this.props.toggleLogin()
}

  render(){

    return(
      <div className="ui menu">
          <img alt="DIY Doom Index" src={logo} style={{width: 294, height:100, borderRadius:4}}></img>
          <div className="right menu">
          <a className="item" onClick={this.handleClick}>Sign Out</a>
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
    toggleLogin: () => dispatch(toggleLogin())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
