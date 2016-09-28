define('zohobooking/tests/routes/exam/exam.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/exam/exam.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'routes/exam/exam.js should pass jshint.\nroutes/exam/exam.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/exam/exam.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});