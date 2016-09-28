define('zohobooking/tests/models/student.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models/student.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'models/student.js should pass jshint.\nmodels/student.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/student.js: line 15, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});