define('zohobooking/components/popup-window', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Component.extend({
		popup: false,
		actions: {
			closePopup: function closePopup(Id) {
				Ember['default'].$("#" + Id).hide();
			}
		}
	});

});