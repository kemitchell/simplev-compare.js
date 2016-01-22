```javascript
var compare = require('simplev-compare')
var assert = require('assert')

assert.strictEqual(compare('7.0.0-2', '7.0.0'), -1)

assert.deepEqual(
  [ '1.8.0', '7.0.1', '1.0.0', '7.0.0-2', '7.0.0' ].sort(compare),
  [ '1.0.0', '1.8.0', '7.0.0-2', '7.0.0', '7.0.1' ])
```
