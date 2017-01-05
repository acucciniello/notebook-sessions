import React from 'react'

var InputBox = React.createClass({
  render: function () {
    return <div className={'input-field'}>
      <input type={this.props.type} value={this.props.value} name={this.props.name} id={this.props.id} />
    </div>
  }
})

export default InputBox
