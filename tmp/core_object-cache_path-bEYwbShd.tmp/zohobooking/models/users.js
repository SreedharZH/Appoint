define('zohobooking/models/users', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Users = DS['default'].Model.extend({
    USERNAME: DS['default'].attr('string'), // No I18N
    EMAIL: DS['default'].attr('string'), // No I18N
    USER_TYPE: DS['default'].attr('number') });
  // No I18N
  exports['default'] = Users;

});