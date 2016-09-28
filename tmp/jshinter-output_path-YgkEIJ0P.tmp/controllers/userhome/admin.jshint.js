QUnit.module('JSHint - controllers/userhome/admin.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/userhome/admin.js should pass jshint.\ncontrollers/userhome/admin.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/userhome/admin.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/userhome/admin.js: line 25, col 29, \'temp\' is already defined.\n\n3 errors');
});
