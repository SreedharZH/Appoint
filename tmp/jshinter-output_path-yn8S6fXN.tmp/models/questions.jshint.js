QUnit.module('JSHint - models/questions.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/questions.js should pass jshint.\nmodels/questions.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/questions.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
