import React, { Component } from 'react';

import {connect} from 'react-redux'

import { Pie } from "react-chartjs"

class PieChart extends Component {


  render(){
    console.log(this.props);

    let pieSlices = []
    for (let set of this.props.UserDatasets){
        pieSlices.push({
          label:this.props.Datasets.find(
            (ele)=>(set.dataset_id === ele.id)).name,
          value:set.weight
        })
    }

    const chartOptions = {
      cutout: 50,
      animateRotate: true
    }

    return(
      <Pie className="card" data={pieSlices}  options={chartOptions}/>
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
