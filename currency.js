
/**
 * @description currency
 * @param {Number} n
 * @return {String}
 */

var isNumber = require('./is/number')

module.exports = function(n) {
  return isNumber(n) ? n
    .toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, '$1,') : ''
}
