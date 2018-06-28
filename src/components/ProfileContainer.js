import React, { Component } from 'react';
import {connect} from 'react-redux'
import NavBar from './Navbar';
import DataVizContainer from './DataVizContainer';
import DataSelector from './DataSelector';


class ProfileContainer extends Component {
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
  return state.User
}

function mapDispatchToProps(dispatch) {
  return {
    //
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
