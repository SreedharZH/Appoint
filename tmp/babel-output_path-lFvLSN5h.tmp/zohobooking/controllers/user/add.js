/* $Id$ */

import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addUser: function addUser() {
			var selectBands = this.store.getById('project', Ember.$("#projectSelect").val()); // No I18N
			var user = this.store.createRecord('user', { 'Name': this.get('name'), 'Project': selectBands }); // No I18N
			user.save().then(function () {
				// console.log("USer :::-",user);
			}, function (response) {
				console.log("response :::-", response);
			});
		}

	}
});