import React, { Component } from 'react';
import {connect} from 'react-redux'
import DataSet from './DataSet'


// contains dataset cards that allow users to modify weights for doom index

class DataSelector extends Component{


  render(){
    return(
      <React.Fragment>
      <div className="ui segment" style={{"margin-left": "2.5em", "margin-right":"2.5em"}}>
        <h3 style={{"margin-left": "2.5em"}}>Doom Metrics</h3>
      </div>

      <div className="ui cards" style={{"margin-left": "2.5em", "margin-right": "2.5em"}}>
        {/* IF datasets have loaded, render them, else display error */}
        {this.props.Datasets && this.props.UserDatasets? this.props.Datasets.map((item)=><DataSet name={item.name} src={item.srcName} desc={item.desc} id={item.id} key={item.id} className="card"/>) : "Error: Cannot Access Database"}
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
