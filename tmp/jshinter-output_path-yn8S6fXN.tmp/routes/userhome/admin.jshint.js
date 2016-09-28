QUnit.module('JSHint - routes/userhome/admin.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/userhome/admin.js should pass jshint.\nroutes/userhome/admin.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/userhome/admin.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
