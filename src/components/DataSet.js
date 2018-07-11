import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Slider} from 'react-semantic-ui-range'
import {UpdateUserDatasets} from '../actions/action'
import {setDoomIndexValues} from '../actions/action'
import {getUserDatasets} from '../actions/action'

class DataSet extends Component{

  constructor(props){
    super(props)

    this.state={

    }
  }

  componentDidMount(){
    // find curent users existing weight for this dataset
    let dataRel = null
    if (this.props.UserDatasets){
      dataRel = this.props.UserDatasets.find((set)=>set.dataset_id === this.props.id)
    }
    // if previous line returned undefined set values
    dataRel = dataRel ? dataRel : {user_id: localStorage.id, positive_corral: true,  dataset_id: this.props.id, weight: 0}
    this.setState({...this.state, dataRel})
  }

handleDoomCorralClick = (e) => {
  // sets pos correlation changes in local state while waiting for submit click
    e.preventDefault()
    this.setState({...this.state,
      dataRel: {...this.state.dataRel,
        positive_corral: true}, changes: true
    })
  }

  handleNotDoomCorralClick = (e) => {
    // sets neg correlation changes in local state while waiting for submit click
    e.preventDefault()
    this.setState({...this.state,
      dataRel: {...this.state.dataRel,
        positive_corral: false}, changes: true
    })
  }

  handleSliderValue = (v) => {
    // sets weight value changes in local state while waiting for submit click
    this.setState({...this.state,
      dataRel: {...this.state.dataRel,
        weight: v}, changes: true
    })
  }

  handleSubmit = (e) =>{
    // sends updated data set weights and correlations to backend and makes
    // requests for updated index values - see redux actions
    e.preventDefault()

     this.setState({...this.state,
      dataRel: {...this.state.dataRel}, changes: false
    }, () => {
        this.props.UpdateUserDatasets(this.state.dataRel)
        this.props.getUserDatasets()
      })
}


  render(){
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
             <div style={{"textAlign": "center"}}>Select Polarity</div>
            <div className="ui buttons" style={{"marginLeft": "2.5%", "marginRight": "auto"}}>
              <button onClick={this.handleDoomCorralClick} className={this.state.dataRel.positive_corral ? "ui negative  button" : "ui button"}>Pro Doom</button>
              <div className="or"></div>
              <button onClick={this.handleNotDoomCorralClick} className={!this.state.dataRel.positive_corral ? "ui positive  button" : "ui button"}>Anti Doom</button>
            </div>
            <div style={{"borderWidth": "5px"}}>
            <div style={{"textAlign": "center"}}>Select Significance Level Below</div>
        <div className="ui range">
          <Slider color="blue" inverted={true}
                  settings={{
                  start: this.state.dataRel.weight,
                  min:0,
                  max:5,
                  step:1,
                  onChange:(value) => {
                    this.handleSliderValue(value)
                  }
                }}/>
        </div>
        </div>
        <br/>
        <div className="ui buttons" style={{"marginLeft": "18%", "marginRight": "auto"}}>
          <button onClick={this.handleSubmit} className={this.state.changes ? "ui blue inverted active button" : "ui active button"}>Confirm Changes</button>
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
    UpdateUserDatasets: (userDataObj) => dispatch(UpdateUserDatasets(userDataObj)),
    setDoomIndexValues: () => dispatch(setDoomIndexValues()),
    getUserDatasets: () => dispatch(getUserDatasets())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataSet)
