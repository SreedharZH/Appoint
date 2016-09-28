import DS from 'ember-data';

export default DS.Model.extend({
  USERID: DS.attr('number'), // No I18N
  TESTID: DS.attr('number'), // No I18N
  QUESTIONID: DS.attr('number'), // No I18N
  USEROPTION: DS.attr('string') });
// No I18N