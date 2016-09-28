QUnit.module('JSHint - components/exam/user/section-one.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/exam/user/section-one.js should pass jshint.\ncomponents/exam/user/section-one.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/exam/user/section-one.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
