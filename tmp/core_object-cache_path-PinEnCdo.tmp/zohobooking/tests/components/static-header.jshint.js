define('zohobooking/tests/components/static-header.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/static-header.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'components/static-header.js should pass jshint.\ncomponents/static-header.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/static-header.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});