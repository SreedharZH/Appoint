define('zohobooking/models/questions', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    TESTID: DS['default'].attr('number'), // No I18N
    QUESTION: DS['default'].attr('string'), // No I18N
    OPTION1: DS['default'].attr('string'), // No I18N
    OPTION2: DS['default'].attr('string'), // No I18N
    OPTION3: DS['default'].attr('string'), // No I18N
    OPTION4: DS['default'].attr('string'), // No I18N
    CORRECTOPT: DS['default'].attr('string')
  });

});