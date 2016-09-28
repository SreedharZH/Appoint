/* $Id$ */

import DS from 'ember-data';

export default DS.Model.extend({
  MEMBERID: DS.belongsTo('member', { async: true }), // No I18N
  RECORDOWNERID: DS.attr('string'), // No I18N
  BOOKID: DS.belongsTo('book', { async: true }), // No I18N
  ISSUEDATE: DS.attr('string'), // No I18N
  ACTUALRETURNDATE: DS.attr('string'), // No I18N
  RETURNDATE: DS.attr('string'), // No I18N
  LATEPAY: DS.attr('number') });
// No I18N