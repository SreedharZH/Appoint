/* $Id$ */

import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addStusemaster: function addStusemaster() {
			var selectBands = this.store.getById('student', Ember.$("#studentSelect").val()); // No I18N
			var stusemaster = this.store.createRecord('StudentSemaster', { 'Student': selectBands, 'Semaster': this.get('semaster'), 'Marks': this.get('marks') }); // No I18N
			stusemaster.save().then(function () {
				// console.log("USer :::-",user);
			}, function (response) {
				console.log("response :::-", response);
			});
		}
	}
});