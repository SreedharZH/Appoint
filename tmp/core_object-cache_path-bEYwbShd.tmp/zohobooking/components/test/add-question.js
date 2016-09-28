define('zohobooking/components/test/add-question', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),

		actions: {
			addQuestion: function addQuestion() {
				var self = this;
				var testId = Ember['default'].$("#testIdSelect").val(); // No I18N
				var questions = self.get("store").createRecord('questions', { 'TESTID': testId, 'QUESTION': self.get('Question'), 'OPTION1': self.get('Option1'), 'OPTION2': self.get('Option2'), 'OPTION3': self.get('Option3'), 'OPTION4': self.get('Option4'), 'CORRECTOPT': self.get('CorrectOption') }); // No I18N
				questions.save();
			}
		}
	});

});