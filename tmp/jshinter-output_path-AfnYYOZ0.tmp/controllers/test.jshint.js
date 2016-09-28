QUnit.module('JSHint - controllers/test.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/test.js should pass jshint.\ncontrollers/test.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/test.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
