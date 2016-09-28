define('zohobooking/components/librarian/add-member', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),
		msg: null,
		// userName : null,

		actions: {
			addMember: function addMember() {
				var self = this;
				var name = self.get("Name");
				var email = self.get("Email");
				var address = self.get("Address");
				var res = self.requestServer.callFunctionAPI(email, "addOrgUser"); // No I18N
				res.then(function (result) {
					function success() {
						self.set("msg", "Record added successfully"); // No I18N
						self.set("Name", ""); // No I18N
						self.set("Email", ""); // No I18N
						self.set("Address", ""); // No I18N
					}
					function failure() {
						self.set("msg", "Record added failed"); // No I18N
					}
					var accountID = result.result.userId;
					var member = self.get("store").createRecord("member", { "ACCOUNTID": accountID, "NAME": name, "EMAIL": email, "ADDRESS": address }); // No I18N
					member.save().then(success, failure);
					Ember['default'].$("#popup").show();
				});
				// function success() {
				// 	self.set("msg" , "Record added successfully");
				// 	self.set("Name", "");
				// 	self.set("Email", "");
				// 	self.set("Address", "");
				// }
				// function failure() {
				// 	self.set("msg", "Record added failed");
				// }
				// // var accountID = result.result.userId;
				// var member = self.get("store").createRecord("member" , {"ACCOUNTID" : "fdewrerw" , "NAME" : "name" , "EMAIL" : "email" , "ADDRESS" : "address"}); // No I18N
				// member.save().then(success,failure);
				// Ember.$("#popup").show();
			}
		}
	});

});