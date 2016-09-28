define('zohobooking/components/exam/admin/view-user', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),

		actions: {
			viewUserDetails: function viewUserDetails(userId) {
				var self = this;
				var temp = self.get("store").find("user-response", { USERID: userId });
				self.set("userResponse", temp);
				Ember['default'].$("#" + userId).next().show();
			}
		}
	});

});