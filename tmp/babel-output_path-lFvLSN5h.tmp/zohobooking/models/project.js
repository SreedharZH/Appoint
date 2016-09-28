/* $Id$ */

import DS from 'ember-data';

var Project = DS.Model.extend({

  Name: DS.attr('string'), // No I18N
  Users: DS.hasMany('user', { async: true }) // No I18N
});

export default Project;