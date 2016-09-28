define('zohobooking/models/zohouser', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  /* $Id$ */

  var zohouser = DS['default'].Model.extend({

    Name: DS['default'].attr('string') });

  // No I18N
  exports['default'] = zohouser;

});