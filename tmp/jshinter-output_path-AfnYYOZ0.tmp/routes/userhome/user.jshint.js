QUnit.module('JSHint - routes/userhome/user.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/userhome/user.js should pass jshint.\nroutes/userhome/user.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/userhome/user.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
