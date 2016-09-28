QUnit.module('JSHint - components/librarian/librarian-details.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/librarian/librarian-details.js should pass jshint.\ncomponents/librarian/librarian-details.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/librarian/librarian-details.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
