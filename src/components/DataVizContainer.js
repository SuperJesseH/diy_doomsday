import React, { Component } from 'react';
import {connect} from 'react-redux'
import LineChart from './LineChart'
import PieChart from './PieChart'

// var LineChart = require("react-chartjs").Line;

import { Line, Pie } from "react-chartjs"

class DataVizContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
    }
  }

  componentDidMount (){

    fetch(`http://localhost:3000/api/v1/data_requests/${localStorage.id}`)
    .then(resp=>resp.json())
    .then(doomIndex=>this.setState({...this.state,doomIndex}))


  }

  render(){
    console.log(this.state);
    const todaysDoom = this.state.doomIndex ? Math.round(Object.values(this.state.doomIndex[0])*1000) : null

    const weekAgoDoom = this.state.doomIndex ? Math.round(Object.values(this.state.doomIndex[7])*1000) : null

    return(
      <div>
      <h3>Your Doomsday Stats</h3>
      <div className="ui divider"></div>
        <div className="label">
          Doom Index
        </div>

        <div className="value">
          {todaysDoom}
        </div>
        <div className="label">
          Δ since Last Week
        </div>
        <div className="value">
          {Math.round(((todaysDoom - weekAgoDoom)/ Math.abs(weekAgoDoom))*100)}%
        </div>
        <LineChart dataSet={this.state.doomIndex}/>
        <PieChart />
      </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(DataVizContainer)
