# text-width

A small utility for measuring the text width in browsers that support the canvas API.

# Usage

Install through `npm` and require it with `browserify`. It uses the [ctx.measureText][mt] method for acquiring the text width.

```javascript
var width = require('text-width');

var w = width('hello world', {
	family: 'Arial',
	size: 10
});
```

It accepts the following options.

- **family**: The font family.
- **size**: The font size. Can either be a number (in pixels) or a string, e.g. `10pt`.

[mt]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
