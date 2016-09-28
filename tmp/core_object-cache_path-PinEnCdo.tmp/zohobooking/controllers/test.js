define('zohobooking/controllers/test', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		values: null,

		actions: {
			test: (function (_test) {
				function test() {
					return _test.apply(this, arguments);
				}

				test.toString = function () {
					return _test.toString();
				};

				return test;
			})(function () {
				var self = this;
				// var test = self.get("store").findAll("test");
				self.serviceFunctions.sort("test");
				self.set("values", test);
			})
		}
	});

});