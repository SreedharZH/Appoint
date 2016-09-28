define('zohobooking/tests/unit/models/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  /* $Id$ */

  ember_qunit.moduleForModel('user', 'Unit | Model | user', { // No I18N
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    // No I18N
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});