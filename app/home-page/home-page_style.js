var extend = require('xtend')

var HomePageStyle = {}
HomePageStyle.base = {
}

HomePageStyle.wrist = extend(HomePageStyle.base, {
})

HomePageStyle.palm = extend(HomePageStyle.wrist, {
})

HomePageStyle.lap = extend(HomePageStyle.palm, {
})

HomePageStyle.desk = extend(HomePageStyle.lap, {
})

HomePageStyle.wall = extend(HomePageStyle.desk, {
})

module.exports = HomePageStyle
