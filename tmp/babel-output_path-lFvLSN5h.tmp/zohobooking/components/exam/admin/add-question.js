import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
		addQuestion: function addQuestion() {
			var self = this;
			var testId = Ember.$("#testIdSelect").val(); // No I18N
			var questions = self.get("store").createRecord('questions', { 'TESTID': testId, 'QUESTION': self.get('Question'), 'OPTION1': self.get('Option1'), 'OPTION2': self.get('Option2'), 'OPTION3': self.get('Option3'), 'OPTION4': self.get('Option4'), 'CORRECTOPT': self.get('CorrectOption') }); // No I18N
			questions.save();
		}
	}
});