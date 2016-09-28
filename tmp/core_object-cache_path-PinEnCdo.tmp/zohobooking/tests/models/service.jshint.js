define('zohobooking/tests/models/service.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models/service.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'models/service.js should pass jshint.\nmodels/service.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/service.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});