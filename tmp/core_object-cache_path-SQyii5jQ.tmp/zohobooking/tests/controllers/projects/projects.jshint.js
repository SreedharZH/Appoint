define('zohobooking/tests/controllers/projects/projects.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/projects/projects.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/projects/projects.js should pass jshint.\ncontrollers/projects/projects.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/projects/projects.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});