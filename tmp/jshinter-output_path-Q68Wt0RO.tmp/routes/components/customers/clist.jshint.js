QUnit.module('JSHint | routes/components/customers/clist.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/components/customers/clist.js should pass jshint.\nroutes/components/customers/clist.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/customers/clist.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
