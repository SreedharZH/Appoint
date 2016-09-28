define('zohobooking/models/student', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  /* $Id$ */

  var Student = DS['default'].Model.extend({

    StudentName: DS['default'].attr('string'), // No I18N
    Deparment: DS['default'].attr('string'), // No I18N
    Batch: DS['default'].attr('string'), // No I18N
    StudentSemaster: DS['default'].hasMany('StudentSemaster', { async: true }) // No I18N

  });

  exports['default'] = Student;

});