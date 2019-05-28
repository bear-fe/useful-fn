
var test = require('tape')
  , currency = require('./currency')
  , isArray = require('./is/array')
  , isFunction = require('./is/function')
  , isNumber = require('./is/number')
  , param = require('./param')
  , parseQuery = require('./parse-query')

test('currency', function(t) {
  t.plan(2)
  t.equal(currency(1000), '1,000.00')
  t.equal(currency('1000'), '')
})

test('is', function(t) {
  t.plan(3)
  t.ok(isArray([]))
  t.ok(isFunction(function() {}))
  t.ok(isNumber(0))
})

test('param', function(t) {
  t.plan(7)
  t.equal(param({foo: 'bar'}), 'foo=bar')
  t.equal(param({foo: null}), 'foo=')
  t.equal(param({foo: 'bar', bar: 'foo'}), 'foo=bar&bar=foo')
  t.equal(param({foo: ['bar', 'baz']}), 'foo=bar&foo=baz')

  t.deepEqual(parseQuery('foo=bar'), {foo: 'bar'})
  t.deepEqual(parseQuery('foo=bar&bar=foo'), {foo: 'bar', bar: 'foo'})
  t.deepEqual(parseQuery('foo=bar&foo=baz'), {foo: ['bar', 'baz']})
})
