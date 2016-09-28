/* $Id$ */

import DS from 'ember-data';

var User = DS.Model.extend({

  Name: DS.attr('string'), // No I18N
  Project: DS.belongsTo('Project', { async: true }) // No I18N
});

export default User;