QUnit.module('JSHint - components/exam/user/online-test.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/exam/user/online-test.js should pass jshint.\ncomponents/exam/user/online-test.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/exam/user/online-test.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/exam/user/online-test.js: line 24, col 40, Use \'===\' to compare with \'0\'.\ncomponents/exam/user/online-test.js: line 35, col 21, \'temp\' is already defined.\n\n4 errors');
});
