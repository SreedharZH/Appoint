QUnit.module('JSHint - controllers/student/add.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/student/add.js should pass jshint.\ncontrollers/student/add.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/student/add.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/student/add.js: line 23, col 15, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
});
