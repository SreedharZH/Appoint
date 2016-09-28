define('zohobooking/routes/projects', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Route.extend({

		model: function model() {

			var projects = this.store.findAll('project'); // No I18N
			return projects;
		}
	});

});