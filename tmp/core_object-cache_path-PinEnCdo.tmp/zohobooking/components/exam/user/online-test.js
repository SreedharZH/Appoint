define('zohobooking/components/exam/user/online-test', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),
		isnotstart: true,
		isSectionOne: false,
		isSectionTwo: false,
		isSectionThree: false,
		sections: ["isSectionOne", "isSectionTwo", "isSectionThree"],

		actions: {
			startTest: function startTest() {
				var self = this;
				self.set("isnotstart", false);
				self.set(self.sections[0], true);
				// var temp = self.get("store").findAll('questions'); // No I18N
				// this.set("model", temp); // No I18N
				var temp = self.get("store").findAll('questions').then(function (questions) {
					var temp = [];
					var sectionCount = 1;
					questions.forEach(function (question, index) {

						temp.push(question);
						if ((index + 1) % 5 == 0 || index == questions.get('length') - 1) {
							self.set("section" + sectionCount, temp);
							temp = [];
							sectionCount++;
						}
					});
				});
				this.set("model", temp);
				var temp = self.get("store").find("users", { EMAIL: self.email });
				self.set("userObj", temp);
			},

			showNextSection: function showNextSection(nextSecId) {
				var self = this;
				var userId = Ember['default'].$("[elname=testSectionBtn]").attr("id");
				$("#questionSections input[type=radio]:checked").each(function (index, element) {
					var testId = Ember['default'].$(element).attr("testid");
					var questionId = Ember['default'].$(element).attr("name");
					var userOption = Ember['default'].$(element).val();
					var userResponse = self.get("store").createRecord('UserResponse', { 'USERID': userId, 'TESTID': testId, 'QUESTIONID': questionId, 'USROPTION': userOption }); // No I18N
					userResponse.save();
				});

				for (var i = 0; i < self.sections.length; i++) {
					if (i === nextSecId) {
						self.set(self.sections[i], true);
					} else {
						self.set(self.sections[i], false);
					}
				}
			}
		}
	});

});