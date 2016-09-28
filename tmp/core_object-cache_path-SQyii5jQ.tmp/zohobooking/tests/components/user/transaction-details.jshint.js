define('zohobooking/tests/components/user/transaction-details.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/user/transaction-details.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'components/user/transaction-details.js should pass jshint.\ncomponents/user/transaction-details.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/user/transaction-details.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});