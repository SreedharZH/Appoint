/* $Id$ */

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		var users = this.store.findAll('user'); // No I18N
		return users;
	}
});