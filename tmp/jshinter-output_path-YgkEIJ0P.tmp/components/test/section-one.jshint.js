QUnit.module('JSHint - components/test/section-one.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/test/section-one.js should pass jshint.\ncomponents/test/section-one.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/test/section-one.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/test/section-one.js: line 8, col 27, Missing semicolon.\n\n3 errors');
});
