import React, { Component } from 'react';
import {connect} from 'react-redux'
import LineChart from './LineChart'
import PieChart from './PieChart'
import {setDoomIndexValues} from '../actions/action'

class DataVizContainer extends Component {
  // requests doom index values, displays current index values and contains charts/data viz

  componentDidMount (){

    this.props.setDoomIndexValues()
  }

  render(){
    return(
      <div>

        <br/>
        <div className="ui grid">

          <div className="four wide column" style={{"marginLeft":"3em", "fontSize": "2em"}}>
            <h3>Doom Indicators</h3>
          </div>
          <div className="two wide column"> </div>
          <div className="one wide column"> </div>
          <div className="four wide column" style={{"fontSize": "2em"}}>
            <h3>30 Day Doom Index</h3>
          </div>

        </div>
        <div className="ui grid">
          <div className="three wide column"><PieChart/></div>
          <div className="four wide column"><LineChart /></div>

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
    setDoomIndexValues: () => dispatch(setDoomIndexValues())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataVizContainer)
