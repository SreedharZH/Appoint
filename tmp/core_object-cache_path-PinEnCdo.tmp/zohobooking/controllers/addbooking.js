define('zohobooking/controllers/addbooking', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Controller.extend({

		actions: {

			add: function add(params) {

				var location = this.store.createRecord('booking', { 'Name': this.get('name'), 'Service': this.get('Service') }); // No I18N
				location.save().then(onSuccess, onFailure);
			}
		}
	});

});