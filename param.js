
/**
 * @description param
 * @param {Object} a
 * @return {String}
 */

var isArray = require('./is/array')
var isFunction = require('./is/function')

function buildParams(prefix, o, add) {
  if (isArray(o)) {
    var i = 0
      , len = o.length
    for (; i < len; i++) {
      add(prefix, o[i])
    }

  } else {
    add(prefix, o)
  }
}

module.exports = function(a) {
  var prefix
    , s = []
    , add = function(key, value) {
      value = isFunction(value) ? value() : (value == null ? '' : value)
      s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value)
    }

  for (prefix in a) {
    buildParams(prefix, a[prefix], add)
  }

  return s.join('&').replace(/%20/g, '+')
}
