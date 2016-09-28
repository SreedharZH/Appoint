define('zohobooking/components/librarian/add-book', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),
		msg: null,
		actions: {
			addBook: function addBook() {
				var self = this;
				// Ember.$("#"+id).parents("div").siblings("div").each(function( index, element ){
				// 	Ember.$(element).find("input").val();
				// });
				// console.log(this.store);
				function success() {
					self.set("msg", "Record added successfully"); // No I18N
					self.set("Name", ""); // No I18N
					self.set("Author", ""); // No I18N
					self.set("Version", ""); // No I18N
					self.set("Total", 0); // No I18N
					self.set("Available", 0); // No I18N
				}
				function failure() {
					self.set("msg", "Record added failed"); // No I18N
				}

				var book = this.get("store").createRecord("book", { 'BOOKNAME': this.get('Name'), 'AUTHOR': this.get('Author'), 'VERSION': this.get('Version'), 'TOTAL': this.get('Total'), 'AVAILABLE': this.get('Available') }); // No I18N
				book.save().then(success, failure);
				Ember['default'].$("#popup").show();
			}
		}
	});

});