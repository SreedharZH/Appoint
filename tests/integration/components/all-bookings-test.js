/* $Id$ */

import { moduleForComponent, test } from 'ember-qunit'; // No I18N
import hbs from 'htmlbars-inline-precompile'; // No I18N

moduleForComponent('all-bookings', 'Integration | Component | all bookings', { // No I18N
  integration: true
});

test('it renders', function(assert) { // No I18N
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-bookings}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-bookings}}
      template block text
    {{/all-bookings}}
  `);

  assert.equal(this.$().text().trim(), 'template block text'); // No I18N
});
