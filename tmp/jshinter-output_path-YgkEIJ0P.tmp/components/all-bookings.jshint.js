QUnit.module('JSHint - components/all-bookings.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/all-bookings.js should pass jshint.\ncomponents/all-bookings.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/all-bookings.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
