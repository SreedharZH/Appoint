define('zohobooking/tests/routes/student/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/student/add.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'routes/student/add.js should pass jshint.\nroutes/student/add.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/student/add.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});