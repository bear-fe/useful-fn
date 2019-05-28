# fn

Useful function

For my work

## Installation

### NPM

Installation via npm

``` shell
$ npm install --save useful-fn
```

### CommonJS

``` javascript
var fn = require('useful-fn')

var param = fn.param

// alternatively
var param = require('useful-fn/param')
```

### ES2015

``` javascript
import fn from 'useful-fn'

// alternatively
import param from 'useful-fn/param'
```

## Usage

### currency

``` javascript
import currency from 'useful-fn/currency'

currency(1000) // 1,000.00
```

### isArray

``` javascript
import isArray from 'useful-fn/is/array'

isArray([]) // true
```

### isFunction

``` javascript
import isFunction from 'useful-fn/is/function'

function foo() {}
isFunction(foo) // true
```

### isNumber

``` javascript
import isNumber from 'useful-fn/is/number'

isNumber(1) // true
isNumber(NaN) // false
isNumber(infinite) // false
```

### param

``` javascript
import param from 'useful-fn/param'

var s = param({
  username: 'john',
  password: 'qwerty',
  favourite: ['apple', 'orange']
})
// s => 'username=john&password=qwerty&favourite=apple&favourite=orange'
```

### parseQuery

``` javascript
import parseQuery from 'useful-fn/parse-query'

var obj = parseQuery(window.location.search.slice(1))
```

### transition

``` javascript
import transition from 'useful-fn/transition'

if (transition) {
  element.addEventListener(transition.end, function() {
    //
  })
} else {
  // Not support
}
```

## License

Under The MIT License.
