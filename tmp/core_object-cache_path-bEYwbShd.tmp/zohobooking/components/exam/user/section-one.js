define('zohobooking/components/exam/user/section-one', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		actions: {
			gotoNextSection: function gotoNextSection(nextSecId) {
				var self = this;
				self.sendAction("showNxtSec", nextSecId);
			}
		}
	});

});