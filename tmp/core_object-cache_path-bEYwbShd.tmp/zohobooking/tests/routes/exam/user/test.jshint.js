define('zohobooking/tests/routes/exam/user/test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/exam/user/test.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'routes/exam/user/test.js should pass jshint.\nroutes/exam/user/test.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/exam/user/test.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});