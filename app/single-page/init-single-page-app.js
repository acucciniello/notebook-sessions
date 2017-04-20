var url = require('url')
// allows us to write single-page apps with a single callback to handle pushState Events
var singlePage = require('single-page')
var location = require('global/document').location

module.exports = InitSinglePageApp

function InitSinglePageApp (cb) {
  // fire callback(href, page) at start and wheneer the page
  // navigation changes so you can update page contents accordingly
  var show = singlePage(function (href) {
    // parse -  takes a url string, parses it and returns a URL object
    // resolve - resolves target URL relative to a base URL
    var u = url.parse(url.resolve(location.href, href))
    // u.pathname is the end of the basic url
    cb(null, u.pathname)
  })

  return show
}
