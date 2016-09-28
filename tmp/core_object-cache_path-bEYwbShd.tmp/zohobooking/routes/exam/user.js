define('zohobooking/routes/exam/user', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			this.transitionTo("exam.user.test");
		}
	});

});