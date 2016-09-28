define('zohobooking/routes/student/add', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			console.log("Test ::-" + this.requestServer);
			var stuSemaster = this.store.findAll('StudentSemaster'); // No I18N
			return stuSemaster;
		}
	});

});