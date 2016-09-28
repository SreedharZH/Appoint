import Ember from 'ember';

export default Ember.Controller.extend({
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