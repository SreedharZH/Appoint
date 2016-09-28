define('zohobooking/tests/controllers/location/new.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/location/new.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/location/new.js should pass jshint.\ncontrollers/location/new.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/location/new.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});