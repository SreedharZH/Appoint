define('zohobooking/tests/models/test-score.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models/test-score.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'models/test-score.js should pass jshint.\nmodels/test-score.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/test-score.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});