/* $Id$ */

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		this.transitionTo('index'); // No I18N
	}
});