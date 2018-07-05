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
      sets:{}
    }
  }


  calculateIndex (daysback = 1){
    let index = 0
    for (let data of Object.values(this.state.sets)){
      const mostReccentValue = parseFloat(Object.values(data.data).slice(Object.values(data).length-daysback)[0])

      const indexComponent = (mostReccentValue - data.mean) /data.stdDev
      index += indexComponent
    }

    if (daysback === 1){
      this.setState({...this.state,currentIndex:index, index7ago:this.calculateIndex(8)})
    }
    return index
  }




  componentDidMount (){
    if (this.props.UserDatasets && this.props.Datasets){
      for (let dataset of this.props.UserDatasets){

        const dataName = this.props.Datasets.find((ele)=>(dataset.dataset_id === ele.id )).name

        fetch("http://localhost:3000/api/v1/data_requests/"+String(dataset.dataset_id)).then(resp=>resp.json()).then(data=>this.setState({...this.state,sets:{...this.state.sets,[dataName]:data}})).then(()=>this.calculateIndex())
      }
    }
  }

  render(){
    let charts =[]
    for (let data of Object.values(this.state.sets)){
      charts.push(<LineChart dataSet={data}/>)
    }
    return(
      <div>
      <h3>Your Doomsday Stats</h3>
      <div className="ui divider"></div>
        <div className="label">
          Doom Index
        </div>

        <div className="value">
            {Math.round((this.state.currentIndex+1)*1000)}
        </div>
        <div className="label">
          %Δ since Last Week
        </div>
        <div className="value">
          {Math.round((((this.state.currentIndex+1) - (this.state.index7ago+1))/Math.abs((this.state.index7ago+1)))*100)}%
        </div>
        {charts}
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
