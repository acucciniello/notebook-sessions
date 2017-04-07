var extend = require('xtend')

var LoginStyle = {}
LoginStyle.base = {
}

LoginStyle.wrist = extend(LoginStyle.base, {
})

LoginStyle.palm = extend(LoginStyle.wrist, {
})

LoginStyle.lap = extend(LoginStyle.palm, {
})

LoginStyle.desk = extend(LoginStyle.lap, {
})

LoginStyle.wall = extend(LoginStyle.desk, {
})

module.exports = LoginStyle
