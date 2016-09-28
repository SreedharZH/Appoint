define('zohobooking/tests/controllers/stusemaster/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/stusemaster/add.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/stusemaster/add.js should pass jshint.\ncontrollers/stusemaster/add.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/stusemaster/add.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});