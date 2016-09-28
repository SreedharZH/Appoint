import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exam/user/section-three', 'Integration | Component | exam/user/section three', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exam/user/section-three}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exam/user/section-three}}
      template block text
    {{/exam/user/section-three}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
