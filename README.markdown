# Re-Interpolated

Regular Expressions from Template Strings that act like you expect.

## Usage

```js
const tre = require("re-interpolated")

const SOME_CONST = ["foo", "bar", "baz"]

const re = tre`components\/${SOME_CONST.join("|")}\/index'.jsx?`

re.test("components/bar/index.js") // true
re.test("components/index.js") // false
```

Composing regular expressions:

```js
const a = /(?:\s+)?/
const b = /[A-Z0-9]/i
const c = /[^\s\u0022\u0027\u003e\u0025\u003d\u0000-\u001f\u007f-\u009f]+/u

const re = tre`(${a}|${b})?${c}`
```
