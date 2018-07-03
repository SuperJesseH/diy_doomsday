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
    fetch("http://localhost:3000/api/v1/data_requests/3").then(resp=>resp.json()).then(datasetNAME=>this.setState({...this.state,datasetNAME}))
  }

  render(){
    return(
      <div>
      <h3>Your Doomsday Stats</h3>
      <div className="ui divider"></div>
        <div className="label">
          Doom Index
        </div>

        <div className="value">
          40,509
        </div>
        <div className="label">
          %Δ since yesterday
        </div>
        <div className="value">
          +1.32%
        </div>
        <LineChart dataSet={this.state.datasetNAME}/>
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
