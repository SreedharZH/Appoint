define('zohobooking/models/member', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  /* $Id$ */

  exports['default'] = DS['default'].Model.extend({
    ACCOUNTID: DS['default'].attr('string'), // No I18N
    NAME: DS['default'].attr('string'), // No I18N
    EMAIL: DS['default'].attr('string'), // No I18N
    ADDRESS: DS['default'].attr('number') });
  // No I18N

});