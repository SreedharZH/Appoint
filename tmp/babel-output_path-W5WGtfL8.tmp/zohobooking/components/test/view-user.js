import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
		viewDetails: function viewDetails(userId) {
			var self = this;
			var temp = self.get("store").find("user-response", { USERID: userId });
			self.set("userResponse", temp);
			Ember.$("#" + userId).next().show();
		}
	}
});