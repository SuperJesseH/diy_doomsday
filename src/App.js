import React, { Component } from 'react';
import {connect} from 'react-redux'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ProfileContainer from './components/ProfileContainer'


class App extends Component {

  //  controls wheather user sees login of homepage


  constructor(){
    super()

    this.state = {
      register : false,
    }
  }

  activateRegister = () =>{
    this.setState({register:true})
  }

  render() {
    return (
      <div className="App">
        {localStorage.id && localStorage.id !== "undefined" ? <ProfileContainer /> : this.state.register ? <RegisterForm /> : <LoginForm signUp={this.activateRegister} />}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    ///
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
