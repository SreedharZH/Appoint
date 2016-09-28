define('zohobooking/models/user-response', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    USERID: DS['default'].attr('number'), // No I18N
    TESTID: DS['default'].attr('number'), // No I18N
    QUESTIONID: DS['default'].attr('number'), // No I18N
    USEROPTION: DS['default'].attr('string') });
  // No I18N

});