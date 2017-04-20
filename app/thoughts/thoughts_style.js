var extend = require('xtend')

var ThoughtsStyle = {}
ThoughtsStyle.base = {
}

ThoughtsStyle.wrist = extend(ThoughtsStyle.base, {
})

ThoughtsStyle.palm = extend(ThoughtsStyle.wrist, {
})

ThoughtsStyle.lap = extend(ThoughtsStyle.palm, {
})

ThoughtsStyle.desk = extend(ThoughtsStyle.lap, {
})

ThoughtsStyle.wall = extend(ThoughtsStyle.desk, {
})

module.exports = ThoughtsStyle
