/* $Id$ */

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		return this.store.findAll('email'); // No I18N
	}
});