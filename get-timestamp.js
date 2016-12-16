module.exports = getTimestamp

function getTimestamp () {
  var d = new Date()
  var day = d.getDate().toString()
  var month = (d.getMonth() + 1).toString()
  var year = d.getFullYear().toString()
  var hour = d.getHours().toString()
  var minutes = d.getMinutes().toString()
  var timestamp

  if (day < 10) {
    day = '0' + day
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  timestamp = month + '/' + day + '/' + year + ' ' + hour + ':' + minutes
  return timestamp
}
