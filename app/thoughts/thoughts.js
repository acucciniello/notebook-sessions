var style = require('./thoughts_style.js')
var sendThoughts = require('./thoughts-function.js')
module.exports = {
  render: RenderThoughts
}

function RenderThoughts (h, state) {
  var thoughtsStyle = style[state.viewport] || style.base

  var ThoughtBox = h('textarea', {
    type: 'text',
    id: 'ThoughtBox',
    placeholder: 'Write your thoughts here to clear your mind...'
  })
  var submitButton = h('button', {
    type: 'button',
    value: 'Save Your Thoughts',
    name: 'Save Your Thoughts',
    className: 'thoughtsButton',
    onclick: function () {
      sendThoughts()
    }
  }, 'Save Thought')

  var renderedThoughts = h('div', {
    className: 'thoughts-page',
    style: thoughtsStyle
  }, [ThoughtBox, submitButton])
  return renderedThoughts
}
