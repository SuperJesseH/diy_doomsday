import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {updateEmail} from '../actions/action'
import {toggleLogin} from '../actions/action'

class LoginForm extends Component {

  constructor(props){
    super(props)

    this.state ={
      errors: false
    }
  }

// Login form from semantic

handleEmailChange = event => {
  // let input = event.target.value
  // this.props.updateUserEmail(input)
}



handelLogin = event => {
  // grabs all form data out of the event and packages it in an object
  let userData = {}
  for (let target of event.target){
    if (target.placeholder){
    userData = {...userData, [target.placeholder]:target.value}
    }
  }
  //checks if the basic requirements are met (email, password)
  if (userData.password && userData.email) {
    // send a post to backend to create a new user, recive a token, and unmount registration screen
    fetch("http://localhost:3000/api/v1/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)})
    .then(resp=> resp.ok ? resp.json().then(json=>{
          localStorage.setItem('token', json.token)
          localStorage.setItem('id', json.id);
        })
        // THIS PROPS SIGNUPCHANGE REFACTOR FOR REDUX !!!!
        //
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        .then(this.props.signupChange).then(this.props.toggleLogin) : this.setState({errors:true}))
  }else{
    // if data is invalid sets state to pop up an error message
    this.setState({errors:true})
  }
}

  render() {
    console.log(this.props);
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.handelLogin}>
              <Segment stacked>
                <Form.Input fluid icon='envelope outline
                ' iconPosition='left' placeholder='email' onKeyUp={this.handleChange}/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='password'
                  type='password'
                />

                {this.state.errors === true ? "Login Invalid Please Try Again" : null}

                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a  onClick={this.props.signUp}>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserEmail: (email) => dispatch(updateEmail(email)),
    toggleLogin: () => dispatch(toggleLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
