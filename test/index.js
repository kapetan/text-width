var test = require('tape');
var width = require('../index');

test('non-zero text width with no options', function(t) {
	var result = width('hello');

	t.ok(result > 0);
	t.end();
});

test('longer word yields greater width', function(t) {
	var result1 = width('hello');
	var result2 = width('helloyou');

	t.ok(result1 > 0);
	t.ok(result2 > result1);
	t.end();
});

test('increased font size yields greater width', function(t) {
	var result1 = width('hello', { size: 10 });
	var result2 = width('hello', { size: 20 });

	t.ok(result1 > 0);
	t.ok(result2 > result1);
	t.end();
});
