define('zohobooking/tests/routes/badurl.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/badurl.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'routes/badurl.js should pass jshint.\nroutes/badurl.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/badurl.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});