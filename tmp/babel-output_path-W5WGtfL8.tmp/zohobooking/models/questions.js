import DS from 'ember-data';

export default DS.Model.extend({
  TESTID: DS.attr('number'), // No I18N
  QUESTION: DS.attr('string'), // No I18N
  OPTION1: DS.attr('string'), // No I18N
  OPTION2: DS.attr('string'), // No I18N
  OPTION3: DS.attr('string'), // No I18N
  OPTION4: DS.attr('string'), // No I18N
  CORRECTOPT: DS.attr('string')
});