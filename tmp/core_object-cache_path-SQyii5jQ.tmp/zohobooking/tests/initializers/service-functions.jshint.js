define('zohobooking/tests/initializers/service-functions.jshint', function () {

  'use strict';

  QUnit.module('JSHint - initializers/service-functions.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/service-functions.js should pass jshint.\ninitializers/service-functions.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ninitializers/service-functions.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});