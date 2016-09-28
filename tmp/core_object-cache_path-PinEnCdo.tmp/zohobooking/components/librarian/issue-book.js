define('zohobooking/components/librarian/issue-book', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),

		actions: {
			issueBooK: function issueBooK(memberID, bookID, issueDate) {
				// this.set("memberID", Ember.$(event.target).val());
				var self = this;
				var memberId = Ember['default'].$("#" + memberID).val(); // No I18N
				var memberObj = self.get("store").getById("member", memberId); // No I18N
				var memberAccountId = memberObj.get("ACCOUNTID"); // No I18N
				var bookId = Ember['default'].$("#" + bookID).val(); // No I18N
				var bookIdObj = self.get("store").getById("book", bookId); // No I18N
				var issuedDate = self.serviceFunctions.getCurrentDateTime();
				var transaction = self.get("store").createRecord("transaction", { "MEMBERID": memberObj, "RECORDOWNERID": memberAccountId, "BOOKID": bookIdObj, "ISSUEDATE": issuedDate, "ACTUALRETURNDATE": "", "RETURNDATE": "", "LATEPAY": 0 }); // No I18N
				transaction.save();
			}

		}
	});

});