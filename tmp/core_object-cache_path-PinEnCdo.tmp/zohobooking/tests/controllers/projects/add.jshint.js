define('zohobooking/tests/controllers/projects/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/projects/add.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/projects/add.js should pass jshint.\ncontrollers/projects/add.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/projects/add.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/projects/add.js: line 22, col 15, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });

});