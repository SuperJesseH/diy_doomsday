import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Slider} from 'react-semantic-ui-range'
import {UpdateUserDatasets} from '../actions/action'

class DataSet extends Component{

  constructor(props){
    super(props)

    this.state={

    }
  }

  componentDidMount(){
    // find curent users existing weight for this dataset
    let dataRel = this.props.UserDatasets.find((set)=>set.dataset_id === this.props.id)
    // if previous line returned undefined set values
    dataRel = dataRel ? dataRel : {user_id: localStorage.id, positive_corral: true,  dataset_id: this.props.id, weight: 0}
    console.log("inside component did mount");
    this.setState({...this.state, dataRel})
  }

handleDoomCorralClick = (e) => {
    e.preventDefault()
    this.setState({...this.state,
      dataRel: {...this.state.dataRel,
        positive_corral: true}, changes: true
    })
  }

  handleNotDoomCorralClick = (e) => {
    e.preventDefault()
    this.setState({...this.state,
      dataRel: {...this.state.dataRel,
        positive_corral: false}, changes: true
    })
  }

  handleSliderValue = (v) => {
    this.setState({...this.state,
      dataRel: {...this.state.dataRel,
        weight: v}, changes: true
    })
  }



  render(){
    console.log("a datasetCard state", this.state);
    console.log("a datasetCard props", this.props);
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
      <div className="ui segment">
        {/*  If we have data prefrences show them */}
        {!this.state.dataRel ? null :
        <form className="ui form">
                      This Metric is...
            <div className="ui buttons">
              <button onClick={this.handleDoomCorralClick} className={this.state.dataRel.positive_corral ? "ui negative  button" : "ui button"}>Pro Doom</button>
              <div className="or"></div>
              <button onClick={this.handleNotDoomCorralClick} className={!this.state.dataRel.positive_corral ? "ui positive  button" : "ui button"}>Anti Doom</button>
            </div>
            This Metric is this important...
        <div className="ui range">
          <Slider color="grey" inverted={false}
                  settings={{
                  start: this.state.dataRel.weight,
                  min:0,
                  max:5,
                  step:1,
                  onChange:(value) => {
                    // this.props.UpdateUserDatasets(this.state.dataRel, value)
                    this.handleSliderValue(value)
                  }
                }}/>
        </div>
        <div className="ui buttons">
          <button onClick={this.handleSubmitClick} className={this.state.changes ? "ui blue inverted active button" : "ui active button"}>Confirm Changes</button>
        </div>
      </form>}
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
