define('web-app/tests/routes/setup-wizard/1-binfo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/setup-wizard/1-binfo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/setup-wizard/1-binfo.js should pass jshint.\nroutes/setup-wizard/1-binfo.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/setup-wizard/1-binfo.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});