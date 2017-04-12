
/**
 * @description 将对象字面量序列化为查询字符串参数
 * @param {Object} a 对象
 * @return {String}
 */

var isFunction = require('./is-function')

function buildParams(prefix, obj, add) {
  if (Array.isArray(obj)) {
    obj.forEach(function(item) {
      add(prefix, item)
    })

  } else {
    add(prefix, obj)
  }
}

function param(a) {
  var prefix,
      s = [],
      add = function(key, value) {
        value = isFunction(value) ? value() : (value == null ? '' : value)
        s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value)
      }

  for (prefix in a) {
    buildParams(prefix, a[prefix], add)
  }

  return s.join('&').replace(/%20/g, '+')
}

module.exports = param
