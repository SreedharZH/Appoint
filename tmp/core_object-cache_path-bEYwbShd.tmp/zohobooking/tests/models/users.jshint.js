define('zohobooking/tests/models/users.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models/users.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'models/users.js should pass jshint.\nmodels/users.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/users.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});