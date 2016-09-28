define('zohobooking/tests/components/librarian/today-transaction.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/librarian/today-transaction.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'components/librarian/today-transaction.js should pass jshint.\ncomponents/librarian/today-transaction.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/librarian/today-transaction.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});