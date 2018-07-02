import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Slider } from 'react-semantic-ui-range'

class DataSet extends Component{


  render(){
    // find curent users existing weight for this dataset
    const dataRel = this.props.UserDatasets.find((set)=>set.dataset_id === this.props.id)
    // set dataweight to correct weight if availbe else 0
    const dataWeight = dataRel ? dataRel.weight : 0

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
                start: dataWeight,
                min:0,
                max:10,
                step:1,
                // onChange: (value) => {
                //   this.setState({
                //     value1:value
                //   })
                // }
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
    //
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataSet)
