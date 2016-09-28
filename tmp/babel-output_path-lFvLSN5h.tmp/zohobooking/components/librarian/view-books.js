/* $Id$ */

import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	fieldNames: ["Name", "Author", "Version", "Total", "Available"], // No I18N
	Name: null,
	Author: null,
	Version: null,
	Total: null,
	Available: null,

	actions: {
		changeValue: function changeValue(id) {
			Ember.$("#" + id).children().find("input").prop("disabled", false).css({ "border-color": "#C1E0FF", "border": "solid 1px" }); // No I18N
			Ember.$("#" + id).find("[elname=editButton]").hide(); // No I18N
			Ember.$("#" + id).find("[elname=saveButton]").show(); // No I18N
		},

		saveValue: function saveValue(id) {
			var self = this;
			Ember.$("#" + id).children().find("input").prop("disabled", true).css({ "border-color": "none", "border": "none" }); // No I18N
			Ember.$("#" + id).children().find("input").each(function (index, element) {
				self.set(self.fieldNames[index], Ember.$(element).val());
			});
			self.get("store").findRecord("book", parseInt(id)).then(function (record) {
				// No I18N
				record.set("BOOKNAME", self.Name); // No I18N
				record.set("AUTHOR", self.Author); // No I18N
				record.set("VERSION", self.Version); // No I18N
				record.set("TOTAL", self.Total); // No I18N
				record.set("AVAILABLE", self.Available); // No I18N
				record.save();
			});
			Ember.$("#" + id).find("[elname=editButton]").show(); // No I18N
			Ember.$("#" + id).find("[elname=saveButton]").hide(); // No I18N
		}

	}
});