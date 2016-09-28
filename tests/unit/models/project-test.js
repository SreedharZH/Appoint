/* $Id$ */

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('project', 'Unit | Model | project', { // No I18N
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) { // No I18N
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
