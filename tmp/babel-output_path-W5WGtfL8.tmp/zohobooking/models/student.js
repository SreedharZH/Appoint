/* $Id$ */

import DS from 'ember-data';

var Student = DS.Model.extend({

  StudentName: DS.attr('string'), // No I18N
  Deparment: DS.attr('string'), // No I18N
  Batch: DS.attr('string'), // No I18N
  StudentSemaster: DS.hasMany('StudentSemaster', { async: true }) // No I18N

});

export default Student;