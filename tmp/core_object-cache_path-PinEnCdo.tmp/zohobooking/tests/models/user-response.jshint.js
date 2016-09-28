define('zohobooking/tests/models/user-response.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models/user-response.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'models/user-response.js should pass jshint.\nmodels/user-response.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/user-response.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});