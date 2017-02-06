import React, { Component } from 'react'
import InputBox from './components/input-box'

export default class Login extends Component {
  render () {
    return (
      <div className={'login-box'} >
        <InputBox type='text' name='email' id='email' />
        <InputBox type='text' name='password' id='password' />
        <SubmitButton type='button' value='Sign In' name='Sign In' onClick='signIn()' />
      </div>

    )
  }
}

var SubmitButton = React.createClass({
  signIn: function () {
    var logInInfo = {
      'email': ' ',
      'password': ' '
    }
    var token = ''
    var uid = ''
    logInInfo.email = document.getElementById('email').value
    logInInfo.password = document.getElementById('password').value
    var xhr = new window.XMLHttpRequest()
    xhr.open('POST', '/login', true)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
        token = JSON.parse(this.responseText).token
        uid = JSON.parse(this.responseText).userid
        window.sessionStorage.setItem('token', token)
        window.sessionStorage.setItem('userid', uid)
      }
      return
    }
    xhr.send(JSON.stringify(logInInfo))
    return console.log(logInInfo)
  },
  render: function () {
    return <div className={'submit-button'}>
      <button type={this.props.type} value={this.props.value} name={this.props.name} onClick={this.signIn} >
        Sign In
      </button>
    </div>
  }
})
