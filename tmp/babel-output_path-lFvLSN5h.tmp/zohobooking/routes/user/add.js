/* $Id$ */

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		var project = this.store.findAll('project'); // No I18N
		return project;
	}
});