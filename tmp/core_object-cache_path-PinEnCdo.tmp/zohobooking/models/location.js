define('zohobooking/models/location', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	/* $Id$ */

	var Location = DS['default'].Model.extend({

		Name: DS['default'].attr('string'), // No I18N
		Address_Line_1: DS['default'].attr('string'), // No I18N
		Address_Line_2: DS['default'].attr('string'), // No I18N
		Country: DS['default'].attr('string'), // No I18N
		State: DS['default'].attr('string'), // No I18N
		City: DS['default'].attr('string'), // No I18N
		Pincode: DS['default'].attr('number'), // No I18N
		Mobile_Number_1: DS['default'].attr('number'), // No I18N
		Mobile_Number_2: DS['default'].attr('number'), // No I18N
		Email_ID: DS['default'].attr('string') // No I18N
	});

	exports['default'] = Location;

});