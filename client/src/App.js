import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return <div>
      <TextBox placeholder='Write your thoughts here to clear your mind...' />
    </div>
  }
}

export default App

var TextBox = React.createClass({
  getInitialState: function () {
    return {
      focused: false
    }
  },

  render: function () {
    return <div className={'text-box'}>
      <div>
        <input type={this.props.type || 'text'} placeholder={this.props.placeholder} />
        <div className='focus'>
          <div></div>
        </div>
      </div>
    </div>
  }
})
