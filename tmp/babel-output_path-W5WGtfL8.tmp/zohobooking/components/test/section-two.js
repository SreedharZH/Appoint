import Ember from 'ember';

export default Ember.Component.extend({
	sectionsCpy: [],

	actions: {
		gotoNextSection: function gotoNextSection(nextSecId) {
			var self = this;
			self.sendAction("showNxtSec", nextSecId);
		}
	}

});