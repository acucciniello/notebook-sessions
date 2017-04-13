// var style = require('./login_style.js')

// var h = require('virtual-dom/h')

var sendThoughts = require('./thoughts-function.js')
module.exports = {
  render: RenderThoughts
}

function RenderThoughts (h) {
  // create two text areas and a button in a div
  var ThoughtBox = h('textarea', {
    type: 'text',
    id: 'ThoughtBox',
    placeholder: 'Write your thoughts here to clear your mind...',
    style: {
      display: 'block'
    }
  }, 'ThoughtBox')
  var submitButton = h('button', {
    type: 'button',
    value: 'Save Your Thoughts',
    name: 'Save Your Thoughts',
    onclick: function () {
      sendThoughts()
    },
    style: {
      display: 'block'
    }
  }, 'Save Thought')

  var renderedThoughts = h('div', {
    className: 'thoughts-page'
  }, [ThoughtBox, submitButton])
  return renderedThoughts
}

/*
function login (event) {
  console.log('we signed in')
}*/

