import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return <div className={'main-page'}>
      <TextBox id='ThoughtBox' placeholder='Write your thoughts here to clear your mind...' />
      <BoxButton type='button' value='Save Your Thoughts' name='Save Your Thoughts' onClick='saveThoughts()' />
    </div>
  }
}

export default App

var BoxButton = React.createClass({
  saveThoughts: function () {
    return console.log(document.getElementById('ThoughtBox').value)
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
