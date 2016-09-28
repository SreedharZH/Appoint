/* $Id$ */

import DS from 'ember-data';

var StudentSemaster = DS.Model.extend({

  Student: DS.belongsTo('student', { async: true }), // No I18N
  Semaster: DS.attr('string'), // No I18N
  Marks: DS.attr('string') // No I18N

});

export default StudentSemaster;