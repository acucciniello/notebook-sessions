import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return <div className={'main-page'}>
      <TextBox placeholder='Write your thoughts here to clear your mind...' />
      <BoxButton type='button' value='Save Your Thoughts' name='Save Your Thoughts' />
    </div>
  }
}

export default App

var BoxButton = React.createClass({
  render: function () {
    return <div className={'box-button'}>
      <button type={this.props.type} value={this.props.value} name={this.props.name}>
      Save Your Thoughts
      </button>
    </div>
  }
})

var TextBox = React.createClass({
  getInitialState: function () {
    return {
      focused: false
    }
  },

  render: function () {
    return <div className={'text-box'}>
      <textarea type={this.props.type || 'text'} placeholder={this.props.placeholder} />
    </div>
  }
})
