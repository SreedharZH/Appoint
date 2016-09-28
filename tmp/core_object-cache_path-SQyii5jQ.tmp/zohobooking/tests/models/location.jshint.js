define('zohobooking/tests/models/location.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models/location.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'models/location.js should pass jshint.\nmodels/location.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/location.js: line 19, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});