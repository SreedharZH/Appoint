/* $Id$ */

import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		add: function add(params) {

			var location = this.store.createRecord('booking', { 'Name': this.get('name'), 'Service': this.get('Service') }); // No I18N
			location.save().then(onSuccess, onFailure);
		}
	}
});