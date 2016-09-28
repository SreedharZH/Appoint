define('zohobooking/routes/userhome/userhome', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			var role = window.ZCB_APP.role;
			console.log("User ::-" + role);
			if (role == "user") {
				this.transitionTo("userhome.user");
			} else if (role == "Administrator") {
				this.transitionTo("userhome.admin");
			}
		}
	});

});