define('zohobooking/models/email', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	/* $Id$ */

	exports['default'] = DS['default'].Model.extend({
		Email: DS['default'].attr('string') // No I18N
	});

});