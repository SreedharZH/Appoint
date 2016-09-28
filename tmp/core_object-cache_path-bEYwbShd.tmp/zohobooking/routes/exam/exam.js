define('zohobooking/routes/exam/exam', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			console.log("Test");
			transitionTo("exam.admin");
		}
	});

});