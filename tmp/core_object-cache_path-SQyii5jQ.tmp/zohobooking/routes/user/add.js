define('zohobooking/routes/user/add', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			var project = this.store.findAll('project'); // No I18N
			return project;
		}
	});

});