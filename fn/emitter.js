
/**
 * @description 事件发生器
 */

var isFunction = require('./is-function')

/**
 * @param {Array} handlers
 * @param {Function} handler
 */
function indexOfHandler(handlers, handler) {
  var i = handlers.length
  while (i--) {
    if (handlers[i] === handler) {
      return i
    }
  }

  return -1
}

function Emitter() {
  this.handlers = {}
}

/**
 * @param {String} evt
 * @param {Function} handler
 */
Emitter.prototype.on = function(evt, handler) {
  if (!(evt in this.handlers)) {
    this.handlers[evt] = []
  }

  this.handlers[evt].push(handler)
  return this
}

/**
 * @param {String} evt
 * @param {Function} handler
 */
Emitter.prototype.off = function(evt, handler) {
  if (handler == null) {
    this.handlers[evt].splice(0)
    return this
  }

  var index = indexOfHandler(this.handlers[evt], handler)
  this.handlers[evt].splice(index, 1)
  return this
}

/**
 * @param {String} evt
 */
Emitter.prototype.emit = function(evt) {
  var arg = Array.prototype.slice.call(arguments, 1)
  var that = this
  Array.isArray(this.handlers[evt]) && this.handlers[evt].forEach(function(item) {
    isFunction(item) && item.apply(that, arg)
  })
  return this
}

module.exports = Emitter
