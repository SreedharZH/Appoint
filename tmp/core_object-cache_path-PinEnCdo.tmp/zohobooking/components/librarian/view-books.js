define('zohobooking/components/librarian/view-books', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),
		fieldNames: ["Name", "Author", "Version", "Total", "Available"], // No I18N
		Name: null,
		Author: null,
		Version: null,
		Total: null,
		Available: null,

		actions: {
			changeValue: function changeValue(id) {
				Ember['default'].$("#" + id).children().find("input").prop("disabled", false).css({ "border-color": "#C1E0FF", "border": "solid 1px" }); // No I18N
				Ember['default'].$("#" + id).find("[elname=editButton]").hide(); // No I18N
				Ember['default'].$("#" + id).find("[elname=saveButton]").show(); // No I18N
			},

			saveValue: function saveValue(id) {
				var self = this;
				Ember['default'].$("#" + id).children().find("input").prop("disabled", true).css({ "border-color": "none", "border": "none" }); // No I18N
				Ember['default'].$("#" + id).children().find("input").each(function (index, element) {
					self.set(self.fieldNames[index], Ember['default'].$(element).val());
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
				Ember['default'].$("#" + id).find("[elname=editButton]").show(); // No I18N
				Ember['default'].$("#" + id).find("[elname=saveButton]").hide(); // No I18N
			}

		}
	});

});