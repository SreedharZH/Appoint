define('zohobooking/models/booking', ['exports', 'ember-data'], function (exports, DS) {

   'use strict';

   /* $Id$ */

   exports['default'] = DS['default'].Model.extend({

      Name: DS['default'].attr('string'), // No I18N
      Service: DS['default'].attr('string'), // No I18N
      Phone: DS['default'].attr('string'), // No I18N
      Staff: DS['default'].attr('string'), // No I18N
      Email: DS['default'].attr('string'), // No I18N
      Do_you_came_before_in_this_problem: DS['default'].attr('string'), // No I18N
      Address: DS['default'].attr('string'), // No I18N
      Choose_Time: DS['default'].attr('string'), // No I18N
      Enter_Your_disease: DS['default'].attr('string'), // No I18N
      Choose_Date: DS['default'].attr('string') // No I18N

   });

});