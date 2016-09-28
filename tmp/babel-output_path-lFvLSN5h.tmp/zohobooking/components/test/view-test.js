import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
		viewDetails: function viewDetails(testId) {
			var self = this;
			var temp = self.get("store").find("questions", { TESTID: testId });
			self.set("questions", temp);
			Ember.$("#" + testId).next().show();
		}
	}
});