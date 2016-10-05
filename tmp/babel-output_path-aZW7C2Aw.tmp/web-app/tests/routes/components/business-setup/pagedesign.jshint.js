define('web-app/tests/routes/components/business-setup/pagedesign.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/business-setup/pagedesign.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/business-setup/pagedesign.js should pass jshint.\nroutes/components/business-setup/pagedesign.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/business-setup/pagedesign.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});