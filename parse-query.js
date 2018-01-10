
/**
 * @description 转换查询字符串为对象
 * @param {String} query 查询字符串
 * @return {Object}
 */

function parseQuery(query) {
  if (typeof query != 'string') {
    return
  }
  var obj = {}
  var arr = query.split('&')
  arr.forEach(function(item) {
    var arr2 = item.split('=')
    var key = decodeURIComponent(arr2[0])
    var val = decodeURIComponent(arr2[1])

    if (!key || !val) return

    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(val)
      } else {
        obj[key] = [obj[key], val]
      }
    } else {
      obj[key] = val
    }
  })
  return obj
}

module.exports = parseQuery
