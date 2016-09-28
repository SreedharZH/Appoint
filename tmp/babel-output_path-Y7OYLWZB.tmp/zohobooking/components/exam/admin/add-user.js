import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
		addUser: function addUser() {
			var self = this;
			var users = self.get("store").createRecord('users', { 'USERNAME': self.get('Name'), 'EMAIL': self.get('Email'), 'USER_TYPE': self.get('UserType') }); // No I18N
			users.save();
		}
	}
});