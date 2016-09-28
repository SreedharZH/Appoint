define('zohobooking/routes/exam/admin/view-user', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll("users");
		}
	});

});