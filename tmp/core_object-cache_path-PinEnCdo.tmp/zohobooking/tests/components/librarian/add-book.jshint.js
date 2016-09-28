define('zohobooking/tests/components/librarian/add-book.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/librarian/add-book.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'components/librarian/add-book.js should pass jshint.\ncomponents/librarian/add-book.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/librarian/add-book.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});