import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from '../logo3.png'
import {toggleLogin} from '../actions/action'

class NavBar extends Component {
  // renders a very basic nav bar

handleClick = (e) =>{
  localStorage.clear()
  this.props.toggleLogin()
}

  render(){
    const todaysDoom = this.props.doomIndexData ? Math.round(Object.values(this.props.doomIndexData[0])*1000) : 0

    const yestrdayDoom = this.props.doomIndexData ? Math.round(Object.values(this.props.doomIndexData[1])*1000) : 0

    const weekAgoDoom = this.props.doomIndexData ? Math.round(Object.values(this.props.doomIndexData[7])*1000) : 0

    const lastWeekChange = Math.round(((todaysDoom - weekAgoDoom)/ Math.abs(weekAgoDoom))*100)

    const yesterdayChange = Math.round(((todaysDoom - yestrdayDoom)/ Math.abs(yestrdayDoom))*100)
    return(
      <div className="ui menu" style={{"margin-left": "2.5em", "margin-right": "2.5em"}}>
          <img alt="DIY Doom Index" src={logo} style={{width: 294, height:100, borderRadius:4}}></img>
          <div className="ui statistics" style={{"margin-left": "auto", "margin-right": "auto"}}>
            <div className="statistic">
              <div className="value">
                {todaysDoom.toLocaleString()}
              </div>
              <div className="label">
                Today's Doom Index
              </div>
            </div>
            <div className={todaysDoom >= 5000 ? "red statistic" : todaysDoom <= 4000 ? "green statistic" : "grey statistic"}>
              <div className="value">
                {todaysDoom >= 5000 ? todaysDoom >= 6000 ? "apocalyptic" : "impending" : todaysDoom <= 4000 ? "deferred" : "threatening"}
              </div>
              <div className="label">
                Doom Status
              </div>
            </div>
            <div className="statistic">
              <div className="value">
                <i className={lastWeekChange >= 0 ? "angle double up icon" : "angle double down icon"}></i>    {" "}{lastWeekChange}%
              </div>
              <div className="label">
                Δ since Last Week
              </div>
            </div>
            <div className="statistic">
              <div className="value">
                <i className={yesterdayChange >= 0 ? "angle double up icon" : "angle double down icon"}></i>
                {" "}{yesterdayChange}%
              </div>
              <div className="label">
                Δ since Yesterday
              </div>
            </div>
          </div>

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
