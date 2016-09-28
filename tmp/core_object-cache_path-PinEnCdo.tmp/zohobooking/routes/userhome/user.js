define('zohobooking/routes/userhome/user', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			var email = window.ZCB_APP.email;
			this.controllerFor("userhome.user").set("email", email); // No I18N
		}
	});

});