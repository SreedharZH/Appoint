QUnit.module('JSHint - components/exam/admin/add-user.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/exam/admin/add-user.js should pass jshint.\ncomponents/exam/admin/add-user.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/exam/admin/add-user.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
