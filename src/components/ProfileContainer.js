import React, { Component } from 'react';
import {connect} from 'react-redux'
import NavBar from './Navbar';
import DataVizContainer from './DataVizContainer';
import DataSelector from './DataSelector';
import HelpModal from './HelpModal';
import {storeDatasets} from '../actions/action'
import {storeUserDatasets} from '../actions/action'
import {getUserDatasets} from '../actions/action'
import {setDoomIndexValues} from '../actions/action'


class ProfileContainer extends Component {

  // contains user home page

 componentDidMount(){
   fetch("https://diy-doom-index.herokuapp.com/api/v1/datasets").then(json=>json.json()).then(console.log)

   //grab avalable datasets from backend and make names and descriptions avalible to display components through redux
   fetch("https://diy-doom-index.herokuapp.com/api/v1/datasets")
   .then(resp => resp.json())
   .then(json=>this.props.storeDatasets(json))

   this.props.getUserDatasets()
   this.props.setDoomIndexValues()
 }


  render() {
    return (
    <div className="App">
      <br/>

        {this.props.Help ?
          <HelpModal />
          :
          <div>
            <NavBar />
            <DataVizContainer />
            <DataSelector />
          </div>
        }

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
    getUserDatasets: () => dispatch(getUserDatasets()),
    setDoomIndexValues: () => dispatch(setDoomIndexValues())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
