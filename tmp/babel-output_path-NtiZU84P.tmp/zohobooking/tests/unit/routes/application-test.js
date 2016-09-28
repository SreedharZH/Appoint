/* $Id$ */

import { moduleFor, test } from 'ember-qunit'; // No I18N

moduleFor('route:application', 'Unit | Route | application', {// No I18N
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function (assert) {
  // No I18N
  var route = this.subject();
  assert.ok(route);
});