QUnit.module('JSHint - components/user/all-books.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/user/all-books.js should pass jshint.\ncomponents/user/all-books.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/user/all-books.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
