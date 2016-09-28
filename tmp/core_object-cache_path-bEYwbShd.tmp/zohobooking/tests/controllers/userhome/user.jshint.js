define('zohobooking/tests/controllers/userhome/user.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/userhome/user.js');
  QUnit.test('should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/userhome/user.js should pass jshint.\ncontrollers/userhome/user.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/userhome/user.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/userhome/user.js: line 24, col 36, Use \'===\' to compare with \'0\'.\ncontrollers/userhome/user.js: line 34, col 17, \'temp\' is already defined.\n\n4 errors');
  });

});