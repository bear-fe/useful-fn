
/**
 * @description is function
 * @param {Object} obj
 * @return {Boolean}
 */

module.exports = function(obj) {
  return ({}).toString.call(obj) == '[object Function]'
}
