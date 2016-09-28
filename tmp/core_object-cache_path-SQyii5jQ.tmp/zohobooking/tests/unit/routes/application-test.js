define('zohobooking/tests/unit/routes/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  /* $Id$ */

  ember_qunit.moduleFor('route:application', 'Unit | Route | application', {// No I18N
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    // No I18N
    var route = this.subject();
    assert.ok(route);
  });

});