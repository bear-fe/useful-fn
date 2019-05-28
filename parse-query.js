
/**
 * @description parse query
 * @param {String} query
 * @return {Object}
 */

var isArray = require('./is/array')

module.exports = function(query) {
  if (typeof query != 'string') {
    query = window.location.search.slice(1)
  }

  if (query == '') {
    return query
  }

  var o = {}
    , i = 0
    , arr = query.split('&')
    , len = arr.length

  for (; i < len; i++) {
    var arr2 = arr[i].split('=')
      , key = decodeURIComponent(arr2[0])
      , val = decodeURIComponent(arr2[1])

    if (!key || !val) continue

    if (o[key]) {
      if (isArray(o[key])) {
        o[key].push(val)
      } else {
        o[key] = [o[key], val]
      }
    } else {
      o[key] = val
    }
  }

  return o
}
