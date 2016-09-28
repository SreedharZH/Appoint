define('zohobooking/models/project', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  /* $Id$ */

  var Project = DS['default'].Model.extend({

    Name: DS['default'].attr('string'), // No I18N
    Users: DS['default'].hasMany('user', { async: true }) // No I18N
  });

  exports['default'] = Project;

});