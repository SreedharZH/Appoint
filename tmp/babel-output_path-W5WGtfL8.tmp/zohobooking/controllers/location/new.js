/* $Id$ */

import Ember from 'ember';

export default Ember.Controller.extend({

	// queryParams:['name','address_line_1','address_line_2','country','state','city','pincode'],
	actions: {

		add: function add(params) {

			var self = this;
			var location = this.store.createRecord('email', { 'Email': this.get('Email') }); // No I18N
			location.save().then(function (response) {
				self.set('location', response); // No I18N
			});
		}
	}
});