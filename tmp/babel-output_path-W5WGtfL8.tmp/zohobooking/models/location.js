/* $Id$ */

import DS from 'ember-data';

var Location = DS.Model.extend({

	Name: DS.attr('string'), // No I18N
	Address_Line_1: DS.attr('string'), // No I18N
	Address_Line_2: DS.attr('string'), // No I18N
	Country: DS.attr('string'), // No I18N
	State: DS.attr('string'), // No I18N
	City: DS.attr('string'), // No I18N
	Pincode: DS.attr('number'), // No I18N
	Mobile_Number_1: DS.attr('number'), // No I18N
	Mobile_Number_2: DS.attr('number'), // No I18N
	Email_ID: DS.attr('string') // No I18N
});

export default Location;