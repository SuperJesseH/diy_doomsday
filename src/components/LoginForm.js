import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {updateEmail} from '../actions/action'

class LoginForm extends Component {

// Login form from semantic

handleEmailChange = event => {
  // let input = event.target.value
  // this.props.updateUserEmail(input)
}



handelLogin = event => {
  debugger
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
                ' iconPosition='left' placeholder='E-mail address' onKeyUp={this.handleChange}/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.User
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserEmail: (email) => dispatch(updateEmail(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
