
/**
 * @description is number
 * @param {Object} o
 * @return {Boolean}
 */

module.exports = function(o) {
  return typeof o == 'number' && isFinite(o)
}
