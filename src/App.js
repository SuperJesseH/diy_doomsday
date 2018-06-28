import React, { Component } from 'react';
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ProfileContainer from './components/ProfileContainer'


class App extends Component {
  constructor(){
    super()

    this.state = {
      register : false,
      signIn: false
    }
  }

  /* // THESE FUNCTIONS: REFACTOR FOR REDUX !!!!
  //
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

  activateRegister = () =>{
    this.setState({register:true})
  }

  toggleSign = () =>{
    this.setState({signIn: !this.state.signIn})
    console.log("hi");
  }

  render() {
    return (
      <div className="App">
        {/* // THIS toggleSign REFACTOR FOR REDUX !!!!
        //
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        {localStorage.id && localStorage.id !== "undefined" ? <ProfileContainer /> : this.state.register ? <RegisterForm signupChange={this.toggleSign}/> : <LoginForm signUp={this.activateRegister} signupChange={this.toggleSign}/>}
      </div>
    );
  }
}

export default App;
