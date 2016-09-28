import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		var self = this;
		// self.store.findAll("test");
		var test = self.get("store").findAll("test");
		// test.then(function(objects){

		// 	// objects = self.serviceFunctions.pick(objects,1);
		// });
		return test;
	}
});