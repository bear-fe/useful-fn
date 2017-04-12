
/**
 * @description 判断一个对象是否为函数
 * @param {Object} obj 对象
 * @return {Boolean}
 */

function isFunction(obj) {
  return ({}).toString.call(obj) == '[object Function]'
}

module.exports = isFunction
