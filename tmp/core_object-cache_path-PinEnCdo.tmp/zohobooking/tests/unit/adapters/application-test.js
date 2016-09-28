define('zohobooking/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  /* $Id$ */

  ember_qunit.moduleFor('adapter:application', 'Unit | Adapter | application', {// No I18N
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    // No I18N
    var adapter = this.subject();
    assert.ok(adapter);
  });

});