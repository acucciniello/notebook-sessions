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

var BoxButton = React.createClass({
  saveThoughts: function () {
    var data = {
      'token': '',
      'text': '',
      'userid': ''
    }
    data.text = document.getElementById('ThoughtBox').value
    data.token = window.sessionStorage.getItem('token')
    data.userid = window.sessionStorage.getItem('userid')
    var xhr = new window.XMLHttpRequest()
    xhr.open('POST', '/thoughts', true)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.send(JSON.stringify(data))
    return console.log(data.text)
  },
  render: function () {
    return <div className={'box-button'}>
      <button type={this.props.type} value={this.props.value} name={this.props.name} onClick={this.saveThoughts} >
      Save Your Thoughts
      </button>
    </div>
  }
})
