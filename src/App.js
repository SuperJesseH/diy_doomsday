import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import LoginForm from './components/LoginForm'
import NavBar from './components/Navbar'
import DataVizContainer from './components/DataVizContainer'
import DataSelector from './components/DataSelector'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LoginForm /> */}
        <NavBar />
        <DataVizContainer />
        <DataSelector />
      </div>
    );
  }
}

export default App;
