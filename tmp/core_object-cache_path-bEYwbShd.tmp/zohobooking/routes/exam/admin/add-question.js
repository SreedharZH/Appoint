define('zohobooking/routes/exam/admin/add-question', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll('test');
		}
	});

});