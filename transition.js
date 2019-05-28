
/**
 * @description Transition
 * @return {Object}
 */

var transEndEventNames = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd'
}

module.exports = function() {
  var el = document.createElement('div')

  for (var name in transEndEventNames) {
    if (el.style[name] !== undefined) {
      return { end: transEndEventNames[name] }
    }
  }

  return false
}()
