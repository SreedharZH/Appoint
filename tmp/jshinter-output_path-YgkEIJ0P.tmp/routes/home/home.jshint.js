QUnit.module('JSHint - routes/home/home.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/home/home.js should pass jshint.\nroutes/home/home.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/home/home.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
