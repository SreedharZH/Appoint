define('zohobooking/tests/models/project.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models/project.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'models/project.js should pass jshint.\nmodels/project.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/project.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});