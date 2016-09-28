define('zohobooking/components/test/section-two', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		sectionsCpy: [],

		actions: {
			gotoNextSection: function gotoNextSection(nextSecId) {
				var self = this;
				self.sendAction("showNxtSec", nextSecId);
			}
		}

	});

});