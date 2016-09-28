define('zohobooking/controllers/delete', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Controller.extend({

		actions: {
			error: function error(_error, trans) {
				console.log("error");
			}
		}
	});

});