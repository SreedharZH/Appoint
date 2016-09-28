define('zohobooking/routes/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			var appname = window.ZCB_APP.appname;
			console.log(appname);
			if (appname == "Library") {
				this.transitionTo("home.home"); // No I18N
			} else {
					var role = window.ZCB_APP.role;
					if (role == "Administrator") {
						this.transitionTo("exam.admin.addTest"); // No I18N
						// this.transitionTo("exam.user"); // No I18N
					} else {
							this.transitionTo("exam.user"); // No I18N
						}
				}
		}
	});

});