define('zohobooking/routes/users', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Route.extend({

		model: function model() {

			var users = this.store.findAll('user'); // No I18N
			return users;
		}
	});

});