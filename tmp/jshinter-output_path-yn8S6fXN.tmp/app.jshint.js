QUnit.module('JSHint - app.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'app.js should pass jshint.\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 5, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 20, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n5 errors');
});
