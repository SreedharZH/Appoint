QUnit.module('JSHint - router.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 43, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
