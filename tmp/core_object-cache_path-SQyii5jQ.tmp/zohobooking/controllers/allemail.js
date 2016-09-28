define('zohobooking/controllers/allemail', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Controller.extend({

		actions: {

			'delete': function _delete(recordID) {
				this.store.find('email', { 'ID': recordID }).then(function (rec) // No I18N
				{

					var devAry = rec.toArray();
					devAry[1].destroyRecord();
					// rec.deleteRecord();
					// rec.save();
				});
				// this.get('store').destroyRecord('email', {'Email' : 'delete'});
			}
		}
	});

});