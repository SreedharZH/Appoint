define('zohobooking/routes/location/list', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	var ListRoute = Ember['default'].Route.extend({

		model: function model() {
			return this.store.findAll('Location'); // No I18N
		}
	});

	exports['default'] = ListRoute;

});