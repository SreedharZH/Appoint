define('zohobooking/components/librarian/view-users', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),

		actions: {
			deleteMember: function deleteMember(id) {
				var self = this;
				var member = self.get("store").findRecord("member", id).then(function (record) {
					// No I18N
					record.deleteRecord();
					record.save();
					// console.log("Result ::-",record.get("EMAIL"));
					var email = record.get("EMAIL"); // No I18N
					self.requestServer.callFunctionAPI(email, "deleteOrgUser"); // No I18N
				});
			}
		}
	});

});