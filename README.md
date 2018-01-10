# fn

Useful function

## Installation

### NPM

通过 npm 安装：

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

### isFunction

判断是否是函数

``` javascript
import isFunction from 'useful-fn/is-function'

function foo() {}
isFunction(foo) // true
```

### param

将对象序列化为查询字符串

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

解析查询参数

``` javascript
import parseQuery from 'useful-fn/parse-query'

var obj = parseQuery(window.location.search.slice(1))
```

## License

Under The MIT License.
