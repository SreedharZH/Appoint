define('zohobooking/components/test/view-test', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),

		actions: {
			viewDetails: function viewDetails(testId) {
				var self = this;
				var temp = self.get("store").find("questions", { TESTID: testId });
				self.set("questions", temp);
				Ember['default'].$("#" + testId).next().show();
			}
		}
	});

});