/* $Id$ */

import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	actions: {
		returnBook: function returnBook(id) {
			var self = this;
			var curDateTime = self.serviceFunctions.getCurrentDateTime();
			self.get("store").findRecord("transaction", parseInt(id)).then(function (record) {
				// No I18N
				record.set("RETURNDATE", curDateTime); // No I18N
				record.set("LATEPAY", "19.00"); // No I18N
				record.save();
			});
		}
	}
});