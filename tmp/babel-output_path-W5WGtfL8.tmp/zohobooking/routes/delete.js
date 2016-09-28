/* $Id$ */

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		var self = this;
		var bookingObj = null;

		self.store.find('booking', { Name: 'Arun' }).then(function (bookingObj) {
			self.set('bookingObj', bookingObj.get('firstObject')); // No I18N

			var record = bookingObj.get('firstObject');
			var test = self.store.deleteRecord(record);
			record.save().then(function (response) {
				console.log('Save OK.', response);
			})['catch'](function (err) {
				console.log('Data ::::-', err);
				self.controllerFor("delete").set("data", err); // No I18N
			});
		});
	}
});