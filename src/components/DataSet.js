import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Slider } from 'react-semantic-ui-range'
import {UpdateUserDatasets} from '../actions/action'

class DataSet extends Component{


  render(){
    // find curent users existing weight for this dataset
    let dataRel = this.props.UserDatasets.find((set)=>set.dataset_id === this.props.id)
    // if previous line returned undefined set values
    dataRel = dataRel ? dataRel : {user_id: localStorage.id, dataset_id: this.props.id, weight: 0}
    return(
      <div className="card">
        <div className="content">
      <div className="header">
        {this.props.name}
      </div>
      <div className="meta">
        {this.props.src}
      </div>
      <div className="description">
        {this.props.desc}
      </div>
      <div className="ui range">
        <Slider color="grey" inverted={false}
                settings={{
                start: dataRel.weight,
                min:0,
                max:10,
                step:1,
                onChange: (value) => {
                  this.props.UpdateUserDatasets(dataRel, value)
                }
              }}/>
      </div>
    </div>
  </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateUserDatasets: (userDataObj, currentValue) => dispatch(UpdateUserDatasets(userDataObj, currentValue))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataSet)
