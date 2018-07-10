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
    const todaysDoom = this.props.doomIndexData ? Math.round(Object.values(this.props.doomIndexData[0])*1000) : 0

    const yestrdayDoom = this.props.doomIndexData ? Math.round(Object.values(this.props.doomIndexData[1])*1000) : 0

    const weekAgoDoom = this.props.doomIndexData ? Math.round(Object.values(this.props.doomIndexData[7])*1000) : 0

    const lastWeekChange = Math.round(((todaysDoom - weekAgoDoom)/ Math.abs(weekAgoDoom))*100)

    const yesterdayChange = Math.round(((todaysDoom - yestrdayDoom)/ Math.abs(yestrdayDoom))*100)
    return(
      <div>

        <br/>
        <div className="ui grid">

          <div className="four wide column" style={{"margin-left":"3em", "fontSize": "2em"}}>
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
