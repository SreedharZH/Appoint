define('zohobooking/tests/routes/test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/test.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'routes/test.js should pass jshint.\nroutes/test.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/test.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});