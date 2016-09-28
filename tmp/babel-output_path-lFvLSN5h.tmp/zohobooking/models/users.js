import DS from 'ember-data';

var Users = DS.Model.extend({
  USERNAME: DS.attr('string'), // No I18N
  EMAIL: DS.attr('string'), // No I18N
  USER_TYPE: DS.attr('number') });
// No I18N
export default Users;