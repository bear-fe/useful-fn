# fn
Useful function

## Installation

### NPM

``` shell
$ npm install --save useful-fn
```

### CommonJS

``` javascript
var param = require('useful-fn/fn/param')

// or
var param = require('useful-fn').param
```

### ES2015

``` javascript
import fn from 'useful-fn'

// or
import param from 'useful-fn/fn/param'
```

## Use

### isFunction

判断是否是函数

```
import isFunction from 'useful-fn/fn/is-function'

function foo() {}
isFunction(foo) // true
```

### param

将对象序列化为查询字符串

``` javascript
import param from 'useful-fn/fn/param'

var s = param({
  username: 'john',
  password: 'qwerty'
})
// s => 'username=john&password=qwerty'
```

## License

Under The MIT License.
