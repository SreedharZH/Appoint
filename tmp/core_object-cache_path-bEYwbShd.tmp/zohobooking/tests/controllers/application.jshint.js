define('zohobooking/tests/controllers/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/application.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});