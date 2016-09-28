define('zohobooking/tests/controllers/projects.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/projects.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/projects.js should pass jshint.\ncontrollers/projects.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/projects.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});