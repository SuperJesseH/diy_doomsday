import React, { Component } from 'react';
import {connect} from 'react-redux'

// var LineChart = require("react-chartjs").Line;

import { Line, Pie } from "react-chartjs"

class DataVizContainer extends Component {


  render(){
    const chartData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    const chartData2 = [
            {color: "blue", label: "test1", value: 1},
            {color: "red", label: "test2", value: 2},
            {color: "yellow", label: "test3", value: 3},
            {color: "purple", label: "test5", value: 2},
            {color: "green", label: "test4", value: 1},
            {color: "pink", label: "test6", value: 1},

        ]

    const chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

    const chartOptions2 = {
      cutoutPercentage: 50,
      animateRotate: true
    }

    return(
      <div className="ui grid">
        <Line data={chartData} options={chartOptions} width="600" height="250"/>
        <Pie data={chartData2}  options={chartOptions2}width="600" />
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
