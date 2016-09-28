import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		console.log("Test");
		transitionTo("exam.admin");
	}
});