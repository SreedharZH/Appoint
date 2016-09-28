define('zohobooking/routes/allemail', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll('email'); // No I18N
		}
	});

});