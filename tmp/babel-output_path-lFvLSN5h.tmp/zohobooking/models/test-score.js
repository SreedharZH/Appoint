import DS from 'ember-data';

export default DS.Model.extend({
  USERID: DS.attr('number'), // No I18N
  TESTID: DS.attr('number'), // No I18N
  SCORE: DS.attr('number') });
// No I18N