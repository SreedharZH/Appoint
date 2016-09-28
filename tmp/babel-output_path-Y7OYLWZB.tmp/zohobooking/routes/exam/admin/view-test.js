import Ember from 'ember';

export default Ember.Route.extend({
	store: Ember.inject.service(),

	model: function model() {
		var test = this.get("store").findAll('test');
		return test;
	}
});