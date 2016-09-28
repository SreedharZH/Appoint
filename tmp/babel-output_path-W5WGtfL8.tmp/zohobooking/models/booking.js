/* $Id$ */

import DS from 'ember-data';

export default DS.Model.extend({

   Name: DS.attr('string'), // No I18N
   Service: DS.attr('string'), // No I18N
   Phone: DS.attr('string'), // No I18N
   Staff: DS.attr('string'), // No I18N
   Email: DS.attr('string'), // No I18N
   Do_you_came_before_in_this_problem: DS.attr('string'), // No I18N
   Address: DS.attr('string'), // No I18N
   Choose_Time: DS.attr('string'), // No I18N
   Enter_Your_disease: DS.attr('string'), // No I18N
   Choose_Date: DS.attr('string') // No I18N

});