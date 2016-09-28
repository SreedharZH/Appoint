define('zohobooking/tests/components/librarian/all-transaction.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/librarian/all-transaction.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'components/librarian/all-transaction.js should pass jshint.\ncomponents/librarian/all-transaction.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/librarian/all-transaction.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});