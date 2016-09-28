/* $Id$ */

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		var student = this.store.findAll('student'); // No I18N
		return student;
	}
});