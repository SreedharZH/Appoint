import Ember from 'ember';

export default Ember.Controller.extend({
	isAddTest: true,
	isViewTest: false,
	isAddQuestion: false,
	isAddUser: false,
	isViewUser: false,
	tabDetails: ["isAddTest", "isViewTest", "isAddQuestion", "isAddUser", "isViewUser"],

	actions: {
		changeTab: function changeTab(tabId) {
			var self = this;
			// self.get("store").unloadAll('test');
			// var test = self.get("store").find("test",3000000003085);
			for (var i = 0; i < self.tabDetails.length; i++) {
				if (i === tabId) {
					self.set(self.tabDetails[i], true);
					Ember.$("#" + self.tabDetails[i].substr(2) + " p").css("color", "#55CEA5").parent().siblings().find("p").css("color", "aliceblue");
					if (i === 1 || i === 2) {
						var temp = self.store.findAll('test');
						this.set("model", temp); // No I18N
					} else if (i === 4) {
							var temp = self.store.findAll('Users');
							this.set("model", temp); // No I18N
						}
				} else {
						self.set(self.tabDetails[i], false);
					}
			}
		}
	}
});