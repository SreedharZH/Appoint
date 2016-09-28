QUnit.module('JSHint - services/service-functions.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/service-functions.js should pass jshint.\nservices/service-functions.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/service-functions.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
