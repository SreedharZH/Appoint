define('zohobooking/tests/models/email.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models/email.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'models/email.js should pass jshint.\nmodels/email.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/email.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});