import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
