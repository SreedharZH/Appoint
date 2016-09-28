QUnit.module('JSHint - controllers/home/home.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/home/home.js should pass jshint.\ncontrollers/home/home.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/home/home.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/home/home.js: line 68, col 21, \'members\' is already defined.\ncontrollers/home/home.js: line 70, col 21, \'books\' is already defined.\n\n4 errors');
});
