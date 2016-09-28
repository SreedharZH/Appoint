/* $Id$ */

import Ember from 'ember';

var ListRoute = Ember.Route.extend({

	model: function model() {
		return this.store.findAll('Location'); // No I18N
	}
});

export default ListRoute;