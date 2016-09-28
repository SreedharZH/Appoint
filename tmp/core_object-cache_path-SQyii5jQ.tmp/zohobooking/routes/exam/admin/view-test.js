define('zohobooking/routes/exam/admin/view-test', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		store: Ember['default'].inject.service(),

		model: function model() {
			var test = this.get("store").findAll('test');
			return test;
		}
	});

});