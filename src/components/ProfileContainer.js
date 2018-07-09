import React, { Component } from 'react';
import {connect} from 'react-redux'
import NavBar from './Navbar';
import DataVizContainer from './DataVizContainer';
import DataSelector from './DataSelector';
import {storeDatasets} from '../actions/action'
import {storeUserDatasets} from '../actions/action'
import {getUserDatasets} from '../actions/action'


class ProfileContainer extends Component {

  // contains user home page 

 componentDidMount(){

   //grab avalable datasets from backend and make names and descriptions avalible to display components through redux
   fetch("http://localhost:3000/api/v1/datasets")
   .then(resp => resp.json())
   .then(json=>this.props.storeDatasets(json))

   this.props.getUserDatasets()
 }


  render() {
    return (
    <div className="App">
        <NavBar />
        <DataVizContainer />
        <DataSelector />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    storeDatasets: (dataJson) => dispatch(storeDatasets(dataJson)),
    storeUserDatasets: (dataJson) => dispatch(storeUserDatasets(dataJson)),
    getUserDatasets: () => dispatch(getUserDatasets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
