import React, { Component } from 'react';

import {connect} from 'react-redux'

import { Line } from "react-chartjs"

class LineChart extends Component {

  average = (array) => array.reduce((a, b) => a + b) / array.length;

  render(){
    let labels = []
    let data = []
    let dataAvg = 0
    if (this.props.dataSet){
      for (let item in this.props.dataSet){
        if (parseFloat(this.props.dataSet[item])){
          labels.push(item)
          data.push(parseFloat(this.props.dataSet[item]))
        }
      }
      dataAvg = this.average(data)
    }

    const chartData = {
        labels: labels.slice(labels.length - 14),
        datasets: [{
            data: data.slice(data.length - 14),

        }]
    }

    const chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

    return(
      <div>
        <Line width={window.innerWidth - 100} height={window.innerHeight * 0.2} data={chartData} options={chartOptions}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LineChart)
