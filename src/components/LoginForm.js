import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {toggleLogin} from '../actions/action'


class LoginForm extends Component {

  constructor(props){
    super(props)

    this.state ={
      errors: false
    }
  }

// Login form from semantic

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
    fetch("https://diy-doom-index.herokuapp.com/api/v1/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)})
    .then(resp=> resp.ok ? resp.json().then(json=>{
          localStorage.setItem('token', json.token)
          localStorage.setItem('id', json.id);
        })
        .then(this.props.signupChange).then(this.props.toggleLogin) : this.setState({errors:true}))
  }else{
    // if data is invalid sets state to pop up an error message
    this.setState({errors:true})
  }
}

  render() {
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
            {!!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ?
               <Header as='h1' color='red' textAlign='center'>
                           Please use DIY Doom Index on a widescreen (desktop) browser. Mobile not yet configured.
              </Header>: null }
            <Header as='h1' color='teal' textAlign='center'>
               DIY DOOM INDEX
            </Header>
            <Header as='h2' color='teal' textAlign='center'>
               Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.handelLogin}>
              <Segment stacked>
                <Form.Input fluid icon='envelope outline' iconPosition='left' placeholder='email' onKeyUp={this.handleChange}/>
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
    toggleLogin: () => dispatch(toggleLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
