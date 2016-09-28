define('zohobooking/tests/controllers/userhome/userhome.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/userhome/userhome.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/userhome/userhome.js should pass jshint.\ncontrollers/userhome/userhome.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/userhome/userhome.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });

});