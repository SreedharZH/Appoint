define('zohobooking/routes/badurl', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			this.transitionTo('index'); // No I18N
		}
	});

});