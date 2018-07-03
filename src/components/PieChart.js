import React, { Component } from 'react';

import {connect} from 'react-redux'

import { Pie } from "react-chartjs"

class PieChart extends Component {


  render(){

    const chartData = [
            {color: "blue", label: "test1", value: 1},
            {color: "red", label: "test2", value: 2},
            {color: "yellow", label: "test3", value: 3},
            {color: "purple", label: "test5", value: 2},
            {color: "green", label: "test4", value: 1},
            {color: "pink", label: "test6", value: 1},

        ]


    const chartOptions = {
      cutout: 50,
      animateRotate: true
    }

    return(
      <Pie className="card" data={chartData}  options={chartOptions}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PieChart)
