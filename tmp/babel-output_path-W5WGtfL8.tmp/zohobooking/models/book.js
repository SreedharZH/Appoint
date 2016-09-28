/* $Id$ */

import DS from 'ember-data';

export default DS.Model.extend({
  BOOKNAME: DS.attr('string'), // No I18N
  AUTHOR: DS.attr('string'), // No I18N
  VERSION: DS.attr('string'), // No I18N
  TOTAL: DS.attr('number'), // No I18N
  AVAILABLE: DS.attr('number') });
// No I18N