import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exam/admin/add-test', 'Integration | Component | exam/admin/add test', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exam/admin/add-test}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exam/admin/add-test}}
      template block text
    {{/exam/admin/add-test}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
