define('zohobooking/tests/routes/users.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/users.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'routes/users.js should pass jshint.\nroutes/users.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/users.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});