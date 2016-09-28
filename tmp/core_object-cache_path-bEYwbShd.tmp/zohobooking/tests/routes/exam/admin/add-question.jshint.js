define('zohobooking/tests/routes/exam/admin/add-question.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/exam/admin/add-question.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'routes/exam/admin/add-question.js should pass jshint.\nroutes/exam/admin/add-question.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/exam/admin/add-question.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});