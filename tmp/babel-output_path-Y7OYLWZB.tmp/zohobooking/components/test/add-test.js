import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
		addTest: function addTest() {
			var self = this;
			var test = self.get("store").createRecord('test', { 'TESTNAME': self.get('Name'), 'DURATION': self.get('Duration'), 'MARK_CORRECT': self.get('PositiveMark'), 'MARK_WRONG': self.get('NegativeMark') }); // No I18N
			test.save();
		}
	}
});