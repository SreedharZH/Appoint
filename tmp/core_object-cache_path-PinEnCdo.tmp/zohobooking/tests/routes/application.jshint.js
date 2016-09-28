define('zohobooking/tests/routes/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/application.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});