var extend = require('xtend')

var SignupStyle = {}
SignupStyle.base = {
}

SignupStyle.wrist = extend(SignupStyle.base, {
})

SignupStyle.palm = extend(SignupStyle.wrist, {
})

SignupStyle.lap = extend(SignupStyle.palm, {
})

SignupStyle.desk = extend(SignupStyle.lap, {
})

SignupStyle.wall = extend(SignupStyle.desk, {
})

module.exports = SignupStyle

