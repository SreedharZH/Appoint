define('zohobooking/models/test-score', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    USERID: DS['default'].attr('number'), // No I18N
    TESTID: DS['default'].attr('number'), // No I18N
    SCORE: DS['default'].attr('number') });
  // No I18N

});