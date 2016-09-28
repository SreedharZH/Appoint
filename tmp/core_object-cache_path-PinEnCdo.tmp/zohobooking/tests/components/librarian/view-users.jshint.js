define('zohobooking/tests/components/librarian/view-users.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/librarian/view-users.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'components/librarian/view-users.js should pass jshint.\ncomponents/librarian/view-users.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/librarian/view-users.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});