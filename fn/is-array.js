
/**
 * @description 判断一个对象是否为数组
 * @param {Object} obj 对象
 * @return {Boolean}
 */

function isArray(obj) {
  return ({}).toString.call(obj) == '[object Array]'
}

module.exports = isArray
