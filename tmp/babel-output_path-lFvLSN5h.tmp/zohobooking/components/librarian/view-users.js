/* $Id$ */

import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

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