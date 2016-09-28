define('zohobooking/models/student-semaster', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  /* $Id$ */

  var StudentSemaster = DS['default'].Model.extend({

    Student: DS['default'].belongsTo('student', { async: true }), // No I18N
    Semaster: DS['default'].attr('string'), // No I18N
    Marks: DS['default'].attr('string') // No I18N

  });

  exports['default'] = StudentSemaster;

});