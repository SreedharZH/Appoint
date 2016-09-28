/* $Id$ */

import { moduleForModel, test } from 'ember-qunit'; // No I18N

moduleForModel('application', 'Unit | Serializer | application', { // No I18N
  // Specify the other units that are required for this test.
  needs: ['serializer:application'] // No I18N
});

// Replace this with your real tests.
test('it serializes records', function(assert) { // No I18N
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
