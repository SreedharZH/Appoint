QUnit.module('JSHint - controllers/addbooking.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/addbooking.js should pass jshint.\ncontrollers/addbooking.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/addbooking.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
