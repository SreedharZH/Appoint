QUnit.module('JSHint - components/test/add-test.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/test/add-test.js should pass jshint.\ncomponents/test/add-test.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/test/add-test.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
