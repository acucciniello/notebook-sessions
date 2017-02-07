import React, { Component } from 'react'
import InputBox from './components/input-box'
import { browserHistory } from 'react-router'

export default class SignUp extends Component {
  render () {
    return (
      <div className={'signup'} >
        <InputBox type='text' name='email' id='email' />
        <InputBox type='text' name='password' id='password' />
        <SubmitButton type='button' value='Sign Up' name='Sign Up' onClick='signUp()' />
      </div>
    )
  }
}

var SubmitButton = React.createClass({
  signUp: function () {
    var signUpInfo = {
      'email': ' ',
      'password': ' '
    }
    var token = ''
    var uid = ''
    signUpInfo.email = document.getElementById('email').value
    signUpInfo.password = document.getElementById('password').value
    var xhr = new window.XMLHttpRequest()
    xhr.open('POST', '/signup', true)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        token = JSON.parse(this.responseText).token
        uid = JSON.parse(this.responseText).userid
        window.sessionStorage.setItem('token', token)
        window.sessionStorage.setItem('userid', uid)
        if (token !== undefined && uid !== undefined) {
          const path = 'http://localhost:3000/thoughts'
          browserHistory.push(path)
        }
      }
      return
    }
    xhr.send(JSON.stringify(signUpInfo))
    return console.log(signUpInfo)
  },
  render: function () {
    return <div className={'submit-button'}>
      <button type={this.props.type} value={this.props.value} name={this.props.name} onClick={this.signUp} >
              Sign Up
      </button>
    </div>
  }
})
