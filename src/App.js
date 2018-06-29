import React, { Component } from 'react';
import {connect} from 'react-redux'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ProfileContainer from './components/ProfileContainer'


class App extends Component {
  constructor(){
    super()

    this.state = {
      register : false,
    }
  }

  /* // THESE FUNCTIONS: REFACTOR FOR REDUX !!!!
  //
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

  activateRegister = () =>{
    this.setState({register:true})
  }

  render() {
          //console.log(this.props.LoggedIn);
    return (

      <div className="App">
        {/* // THIS toggleSign REFACTOR FOR REDUX !!!!
        //
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
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
