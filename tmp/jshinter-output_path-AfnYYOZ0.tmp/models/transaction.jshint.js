QUnit.module('JSHint - models/transaction.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/transaction.js should pass jshint.\nmodels/transaction.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/transaction.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
