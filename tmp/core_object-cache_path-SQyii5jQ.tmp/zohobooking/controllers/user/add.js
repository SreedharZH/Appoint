define('zohobooking/controllers/user/add', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Controller.extend({
		actions: {
			addUser: function addUser() {
				var selectBands = this.store.getById('project', Ember['default'].$("#projectSelect").val()); // No I18N
				var user = this.store.createRecord('user', { 'Name': this.get('name'), 'Project': selectBands }); // No I18N
				user.save().then(function () {
					// console.log("USer :::-",user);
				}, function (response) {
					console.log("response :::-", response);
				});
			}

		}
	});

});