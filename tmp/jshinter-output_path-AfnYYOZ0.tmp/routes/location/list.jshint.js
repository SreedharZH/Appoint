QUnit.module('JSHint - routes/location/list.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/location/list.js should pass jshint.\nroutes/location/list.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/location/list.js: line 12, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
