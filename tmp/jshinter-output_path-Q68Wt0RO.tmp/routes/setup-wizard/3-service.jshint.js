QUnit.module('JSHint | routes/setup-wizard/3-service.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/setup-wizard/3-service.js should pass jshint.\nroutes/setup-wizard/3-service.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/setup-wizard/3-service.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
