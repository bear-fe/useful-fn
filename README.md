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

// or
var param = require('useful-fn/fn/param')
```

### ES2015

``` javascript
import fn from 'useful-fn'

// or
import param from 'useful-fn/fn/param'
```

## Usage

### isArray

判断是否是数组

``` javascript
import isArray from 'useful-fn/fn/is-array'

let foo = []
isArray(foo) // true
```

### isFunction

判断是否是函数

``` javascript
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
  password: 'qwerty',
  favourite: ['apple', 'orange']
})
// s => 'username=john&password=qwerty&favourite=apple&favourite=orange'
```

### 事件发生器

绑定事件

``` javascript
import Emitter from 'useful-fn/fn/emitter'

function foo() {}
var e = new Emitter()
e.on('bar', foo) // 支持链式操作 e.on().on()
```

触发事件

``` javascript
e.emit('bar')
```

解除绑定事件

``` javascript
e.off('bar', foo)
e.off('bar')
```

## License

Under The MIT License.
