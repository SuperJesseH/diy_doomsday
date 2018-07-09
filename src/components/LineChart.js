import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Line } from "react-chartjs"

class LineChart extends Component {

  // graphs a line chart of previous 30 days of doom index values

  render(){

    let labels = []
    let data = []

    // reverses data order for display
    if (this.props.doomIndexData){
      for (let item of this.props.doomIndexData){
          labels.unshift(Object.keys(item)[0])
          data.unshift(Math.round(Object.values(item)[0]*1000))
      }
    }

    const chartData = {
        labels: labels,
        datasets: [{
            data: data,

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
