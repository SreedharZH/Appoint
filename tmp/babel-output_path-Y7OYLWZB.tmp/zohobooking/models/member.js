/* $Id$ */

import DS from 'ember-data';

export default DS.Model.extend({
  ACCOUNTID: DS.attr('string'), // No I18N
  NAME: DS.attr('string'), // No I18N
  EMAIL: DS.attr('string'), // No I18N
  ADDRESS: DS.attr('number') });
// No I18N