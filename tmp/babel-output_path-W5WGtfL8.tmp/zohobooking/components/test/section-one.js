import Ember from 'ember';

export default Ember.Component.extend({
	sectionsCpy: [],
	shiruCheck: function shiruCheck() {

		console.log("sshor");
		console.log("hai");
	},

	actions: {
		gotoNextSection: function gotoNextSection(nextSecId) {
			var self = this;
			self.sendAction("showNxtSec", nextSecId);
		}
	}

});