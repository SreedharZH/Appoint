define('zohobooking/tests/components/exam/admin/view-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/exam/admin/view-test.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'components/exam/admin/view-test.js should pass jshint.\ncomponents/exam/admin/view-test.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/exam/admin/view-test.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});