import React, { Component } from 'react'

export default class Login extends Component {
  render () {
    return (
      <div className={'login-box'} >
        <InputBox type='text' name='email' />
        <InputBox type='text' name='password' />
      </div>

    )
  }
}

var InputBox = React.createClass({
  render: function () {
    return <div className={'input-field'}>
      <input type={this.props.type} value={this.props.value} name={this.props.name} />
    </div>
  }
})
