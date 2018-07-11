import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Pie } from "react-chartjs"
import {getUserDatasets} from '../actions/action'
import {Header} from 'semantic-ui-react'

class PieChart extends Component {
  // vizualizes index weights in a pie chart

  componentWillReceiveProps(nextProps) {
    if (this.props.updated !== nextProps.updated) {
      this.props.getUserDatasets()
    }
  }

  render(){
    let pieSlices = []
    if (this.props.UserDatasets && this.props.Datasets){
      for (let set of this.props.UserDatasets){
          pieSlices.push({
            label:this.props.Datasets.find(
              (ele)=>(set.dataset_id === ele.id)).name,
            value:set.weight
          })
      }
    }

    const chartOptions = {
      cutout: 50,
      animateRotate: true
    }

    return(
      <React.Fragment>
      {this.props.UserDatasets && this.props.UserDatasets[0] ? <Pie className="card" data={pieSlices} options={chartOptions}/> :
      <React.Fragment>
        <Header as='h2' color='red' textAlign='center'>
           Adjust Doom Metrics To Activate Index
        </Header>
      </React.Fragment>
      }
      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) =>{
  return {
    getUserDatasets: () => dispatch(getUserDatasets())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PieChart)
