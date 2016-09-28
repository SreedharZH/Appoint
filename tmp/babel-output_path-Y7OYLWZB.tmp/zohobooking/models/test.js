import DS from 'ember-data';

export default DS.Model.extend({
  TESTNAME: DS.attr('string'), // No I18N
  DURATION: DS.attr('number'), // No I18N
  MARK_CORRECT: DS.attr('number'), // No I18N
  MARK_WRONG: DS.attr('number') });
// No I18