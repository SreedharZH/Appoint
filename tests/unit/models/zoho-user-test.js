/* $Id$ */

import { moduleForModel, test } from 'ember-qunit'; // No I18N

moduleForModel('zoho-user', 'Unit | Model | zoho user', { // No I18N
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) { // No I18N
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
