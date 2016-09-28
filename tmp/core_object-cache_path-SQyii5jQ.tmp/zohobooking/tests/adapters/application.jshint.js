define('zohobooking/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/application.js: line 6, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});