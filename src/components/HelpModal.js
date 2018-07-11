import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Header, Modal } from 'semantic-ui-react'
import {toggleHelp} from '../actions/action'
import img from '../modalHelp.png'



class HelpModal extends Component{


  render(){
    return(
      <div onClick={this.props.toggleHelp} className="ui active basic modal" style={{"color": "black", "marginLeft": "25%"}}>
        <h2> Welcome to DIY Doom Index </h2>
        <p style={{maxWidth: "400px", "textAlign": "justify"}}>When the world is in turmoil the last thing you want to do is scour the web for accurate and timely data to confirm your existential dread. That’s why we’ve done it for you! Follow these simple instructions to get an accurate pulse on the end of the world</p>
        <img src={img} width="400px" alt="sample data selector"/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHelp: () => dispatch(toggleHelp())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HelpModal)
