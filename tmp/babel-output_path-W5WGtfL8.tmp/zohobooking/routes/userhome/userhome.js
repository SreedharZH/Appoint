import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		var role = window.ZCB_APP.role;
		console.log("User ::-" + role);
		if (role == "user") {
			this.transitionTo("userhome.user");
		} else if (role == "Administrator") {
			this.transitionTo("userhome.admin");
		}
	}
});