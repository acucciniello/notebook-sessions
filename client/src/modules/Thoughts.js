import React, { Component } from 'react'
import TextBox from './components/text-box.js'
import './Thoughts.css'

export default class Thoughts extends Component {
  render () {
    return (<div className={'main-page'}>
      <TextBox id='ThoughtBox' placeholder='Write your thoughts here to clear your mind...' />
      <BoxButton type='button' value='Save Your Thoughts' name='Save Your Thoughts' onClick='saveThoughts()' />
    </div>
    )
  }
}

// Need a function for when you are trying to access this page, send the token to the server to authenticatie
// var token = sessionStorage.getItem('token')

var BoxButton = React.createClass({
  saveThoughts: function () {
    var text = document.getElementById('ThoughtBox').value
    var xhr = new window.XMLHttpRequest()

    console.log(token)
    xhr.open('POST', '/thoughts', true)
    xhr.send(text)
    return console.log(text)
  },
  render: function () {
    return <div className={'box-button'}>
      <button type={this.props.type} value={this.props.value} name={this.props.name} onClick={this.saveThoughts} >
      Save Your Thoughts
      </button>
    </div>
  }
})
