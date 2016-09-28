define('zohobooking/models/user', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  /* $Id$ */

  var User = DS['default'].Model.extend({

    Name: DS['default'].attr('string'), // No I18N
    Project: DS['default'].belongsTo('Project', { async: true }) // No I18N
  });

  exports['default'] = User;

});