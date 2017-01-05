import React, { Component } from 'react'
import InputBox from './components/input-box'
import SubmitButton from './components/submit-button'
var url = '/signup'

export default class SignUp extends Component {
  render (url) {
    return (
      <div className={'signup'} >
        <InputBox type='text' name='email' id='email' />
        <InputBox type='text' name='password' id='password' />
        <SubmitButton type='button' value='Sign Up' name='Sign Up' onClick='signUp(url)' />
      </div>

    )
  }
}

