QUnit.module('JSHint - routes/location/new.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/location/new.js should pass jshint.\nroutes/location/new.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/location/new.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
