define('zohobooking/components/test/section-one', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		sectionsCpy: [],
		shiruCheck: function shiruCheck() {

			console.log("sshor");
			console.log("hai");
		},

		actions: {
			gotoNextSection: function gotoNextSection(nextSecId) {
				var self = this;
				self.sendAction("showNxtSec", nextSecId);
			}
		}

	});

});