import React, { Component } from 'react'
import './Thoughts.css'

export default class Thoughts extends Component {
  render () {
    return <div className={'main-page'}>
      <TextBox id='ThoughtBox' placeholder='Write your thoughts here to clear your mind...' />
      <BoxButton type='button' value='Save Your Thoughts' name='Save Your Thoughts' onClick='saveThoughts()' />
    </div>
  }
}

var BoxButton = React.createClass({
  saveThoughts: function () {
    var text = document.getElementById('ThoughtBox').value
    var xhr = new window.XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3000', true)
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

var TextBox = React.createClass({
  render: function () {
    return <div className={'text-box'}>
      <textarea type={this.props.type || 'text'} placeholder={this.props.placeholder} id={this.props.id} />
    </div>
  }
})

