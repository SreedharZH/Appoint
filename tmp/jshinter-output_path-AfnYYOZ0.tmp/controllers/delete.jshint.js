QUnit.module('JSHint - controllers/delete.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/delete.js should pass jshint.\ncontrollers/delete.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/delete.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/delete.js: line 9, col 33, Missing semicolon.\n\n3 errors');
});
