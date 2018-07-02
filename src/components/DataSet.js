import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Slider } from 'react-semantic-ui-range'

class DataSet extends Component{


  render(){
    console.log(this.props);
    return(
      <div className="card">
        <div className="content">
      <div className="header">
        {this.props.name}
      </div>
      <div className="meta">
        {/* REPLACE WITH SOURCE NAME */}
        {this.props.desc}
      </div>
      <div className="description">
        {this.props.desc}
      </div>
      <div className="ui range">
        <Slider color="grey" inverted={false}
                settings={{
                start: 7,
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
