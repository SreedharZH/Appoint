define('zohobooking/models/transaction', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  /* $Id$ */

  exports['default'] = DS['default'].Model.extend({
    MEMBERID: DS['default'].belongsTo('member', { async: true }), // No I18N
    RECORDOWNERID: DS['default'].attr('string'), // No I18N
    BOOKID: DS['default'].belongsTo('book', { async: true }), // No I18N
    ISSUEDATE: DS['default'].attr('string'), // No I18N
    ACTUALRETURNDATE: DS['default'].attr('string'), // No I18N
    RETURNDATE: DS['default'].attr('string'), // No I18N
    LATEPAY: DS['default'].attr('number') });
  // No I18N

});