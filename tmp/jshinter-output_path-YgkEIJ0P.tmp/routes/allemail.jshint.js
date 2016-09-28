QUnit.module('JSHint - routes/allemail.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/allemail.js should pass jshint.\nroutes/allemail.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/allemail.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/allemail.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
});
