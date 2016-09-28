define('zohobooking/tests/components/librarian/issue-book.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/librarian/issue-book.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'components/librarian/issue-book.js should pass jshint.\ncomponents/librarian/issue-book.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/librarian/issue-book.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/librarian/issue-book.js: line 14, col 62, Missing semicolon.\n\n3 errors');
  });

});