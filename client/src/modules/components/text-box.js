import React from 'react'

var TextBox = React.createClass({
  render: function () {
    return <div className={'text-box'}>
      <textarea type={this.props.type || 'text'} placeholder={this.props.placeholder} id={this.props.id} />
    </div>
  }
})

export default TextBox
