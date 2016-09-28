define('zohobooking/routes/stusemaster/add', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			var student = this.store.findAll('student'); // No I18N
			return student;
		}
	});

});