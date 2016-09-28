define('zohobooking/tests/routes/error.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/error.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'routes/error.js should pass jshint.\nroutes/error.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/error.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});