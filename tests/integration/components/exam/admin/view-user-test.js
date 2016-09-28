import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exam/admin/view-user', 'Integration | Component | exam/admin/view user', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exam/admin/view-user}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exam/admin/view-user}}
      template block text
    {{/exam/admin/view-user}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
