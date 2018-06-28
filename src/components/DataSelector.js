import React, { Component } from 'react';
import {connect} from 'react-redux'
import DataSet from './DataSet'
import UUID from 'uuid'

class DataSelector extends Component{


  render(){
    const dataSetsToRender = [1,2,3,4,5,6,7,8,9,10]
    return(
      <div className="ui cards">
        {dataSetsToRender.map((item)=><DataSet key={UUID()} className="card"/>)}
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

export default connect(mapStateToProps,mapDispatchToProps)(DataSelector)
