QUnit.module('JSHint - routes/location.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/location.js should pass jshint.\nroutes/location.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/location.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
