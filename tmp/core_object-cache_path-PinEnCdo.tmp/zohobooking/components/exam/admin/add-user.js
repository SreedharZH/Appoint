define('zohobooking/components/exam/admin/add-user', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),

		actions: {
			addUser: function addUser() {
				var self = this;
				var users = self.get("store").createRecord('users', { 'USERNAME': self.get('Name'), 'EMAIL': self.get('Email'), 'USER_TYPE': self.get('UserType') }); // No I18N
				users.save();
			}
		}
	});

});