import React from 'react'

var SubmitButton = React.createClass({
  signUp: function (url) {
    var signUpInfo = {
      'email': ' ',
      'password': ' '
    }
    signUpInfo.email = document.getElementById('email').value
    signUpInfo.password = document.getElementById('password').value
    var xhr = new window.XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
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

export default SubmitButton
