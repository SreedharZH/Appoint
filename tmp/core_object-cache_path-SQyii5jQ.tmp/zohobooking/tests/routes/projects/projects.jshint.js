define('zohobooking/tests/routes/projects/projects.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/projects/projects.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'routes/projects/projects.js should pass jshint.\nroutes/projects/projects.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/projects/projects.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/projects/projects.js: line 10, col 46, Missing semicolon.\n\n3 errors');
  });

});