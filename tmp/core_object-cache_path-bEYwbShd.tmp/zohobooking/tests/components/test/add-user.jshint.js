define('zohobooking/tests/components/test/add-user.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/test/add-user.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'components/test/add-user.js should pass jshint.\ncomponents/test/add-user.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/test/add-user.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});