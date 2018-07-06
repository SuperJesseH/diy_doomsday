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
        {/* IF datasets have loaded, render them, else display error */}
        {this.props.Datasets ? this.props.Datasets.map((item)=><DataSet name={item.name} src={item.srcName} desc={item.desc} id={item.id} key={item.id} className="card"/>) : "Error: Cannot Access Database"}
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
