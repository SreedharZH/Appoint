define('zohobooking/components/librarian/librarian-details', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Component.extend({
		save: false,

		actions: {
			changeValue: function changeValue(elname) {
				Ember['default'].$("[elname=" + elname + "]").siblings("input").prop("disabled", false);
				this.set("save", true); // No I18N
			},

			saveValue: function saveValue(elname) {
				Ember['default'].$("[elname=" + elname + "]").siblings("input").prop("disabled", true);
				this.set("save", false); // No I18N
			}
		}
	});

});