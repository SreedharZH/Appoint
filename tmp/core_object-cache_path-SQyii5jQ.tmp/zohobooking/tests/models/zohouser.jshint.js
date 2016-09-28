define('zohobooking/tests/models/zohouser.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models/zohouser.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'models/zohouser.js should pass jshint.\nmodels/zohouser.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/zohouser.js: line 10, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});