define('zohobooking/models/book', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  /* $Id$ */

  exports['default'] = DS['default'].Model.extend({
    BOOKNAME: DS['default'].attr('string'), // No I18N
    AUTHOR: DS['default'].attr('string'), // No I18N
    VERSION: DS['default'].attr('string'), // No I18N
    TOTAL: DS['default'].attr('number'), // No I18N
    AVAILABLE: DS['default'].attr('number') });
  // No I18N

});