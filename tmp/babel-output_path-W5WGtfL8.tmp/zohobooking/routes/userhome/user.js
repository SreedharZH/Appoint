import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		var email = window.ZCB_APP.email;
		this.controllerFor("userhome.user").set("email", email); // No I18N
	}
});