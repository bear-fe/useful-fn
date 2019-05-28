
/**
 * @description is array
 * @param {Object} obj
 * @return {Boolean}
 */

module.exports = function(obj) {
  return ({}).toString.call(obj) == '[object Array]'
}
