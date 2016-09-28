/* $Id$ */

import Ember from 'ember';

export default Ember.Controller.extend({
	personalDetails: true,
	transactions: false,
	addBook: false,
	addMember: false,
	viewBook: false,
	viewUser: false,
	todayTransaction: false,
	allTransactions: false,
	allbooks: false,
	issueBook: false,
	userTabs: ["transactions", "allbooks"], // No I18N
	librarianTabs: ["personalDetails", "addBook", "addMember", "viewBook", "viewUser", "todayTransaction", "allTransactions", "issueBook"], // No I18N
	tabs: [],
	user: null,
	model: null,
	members: null,
	books: null,

	actions: {
		changeTab: function changeTab(id, tabName) {
			if (this.memberrole === true) {
				this.set("tabs", this.userTabs); // No I18N
			} else {
					this.set("tabs", this.librarianTabs); // No I18N
				}
			for (var i = 0; i < this.tabs.length; i++) {
				if (this.tabs[i] === tabName) {
					this.set(this.tabs[i], true);
				} else {
					this.set(this.tabs[i], false);
				}
			}
			if (tabName == "transactions") {
				var transaction = this.store.findAll('transaction'); // No I18N
				this.set("model", transaction); // No I18N
			} else if (tabName == "allbooks" || tabName == "viewBook") {
					var books = this.store.findAll('book'); // No I18N
					this.set("model", books); // No I18N
				} else if (tabName == "allTransactions") {
						var transactions = this.store.findAll('transaction'); // No I18N
						this.set("model", transactions); // No I18N
					} else if (tabName == "viewUser") {
							var members = this.store.findAll('member'); // No I18N
							this.set("model", members); // No I18N
						}
						// else if(tabName == "personalDetails")
						// {
						// 	var member = this.store.find('member', {'ACCOUNTID' : window.ZCB_APP.username}).then(function(mem){ return mem.get('firstObject');}); //, {'NAME' : 'Solai'});// No I18N
						// 	this.set("model", members);// No I18N
						// }

						else if (tabName == "issueBook") {
								var members = this.store.findAll('member'); // No I18N
								this.set("members", members); // No I18N
								var books = this.store.findAll('book'); // No I18N
								this.set("books", books); // No I18N
							}

			Ember.$("#" + id + " p").css("color", "#55CEA5").parent().siblings().find("p").css("color", "aliceblue"); // No I18N
		}

	}
});