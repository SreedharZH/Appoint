define('zohobooking/models/test', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    TESTNAME: DS['default'].attr('string'), // No I18N
    DURATION: DS['default'].attr('number'), // No I18N
    MARK_CORRECT: DS['default'].attr('number'), // No I18N
    MARK_WRONG: DS['default'].attr('number') });
  // No I18

});