import React, { Component } from 'react';
import {connect} from 'react-redux'
import DataSet from './DataSet'

class DataSelector extends Component{


  render(){
    return(
      <React.Fragment>
      <div className="ui divider"></div>
      <h3>Doom Metrics</h3>
      <div className="ui cards">
        {this.props.Datasets.map((item)=><DataSet name={item.name} desc={item.desc} id={item.id} key={item.id} className="card"/>)}
      </div>
    </React.Fragment>
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
