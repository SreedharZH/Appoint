QUnit.module('JSHint - models/student-semaster.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/student-semaster.js should pass jshint.\nmodels/student-semaster.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/student-semaster.js: line 14, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
