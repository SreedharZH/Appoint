define('zohobooking/controllers/test', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		values: null,

		actions: {
			sort: function sort(fieldName) {
				var self = this;
				// var test = self.get("store").findAll("test");
				var test = self.zcdata.sort("test");
				self.set("values", test);
			}
		}
	});

});