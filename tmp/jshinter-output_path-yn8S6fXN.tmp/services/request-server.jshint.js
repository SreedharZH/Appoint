QUnit.module('JSHint - services/request-server.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/request-server.js should pass jshint.\nservices/request-server.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/request-server.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
