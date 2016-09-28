define('zohobooking/components/exam/admin/add-test', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		store: Ember['default'].inject.service(),

		actions: {
			addTest: function addTest() {
				var self = this;
				var test = self.get("store").createRecord('test', { 'TESTNAME': self.get('Name'), 'DURATION': self.get('Duration'), 'MARK_CORRECT': self.get('PositiveMark'), 'MARK_WRONG': self.get('NegativeMark') }); // No I18N
				test.save();
			}
		}
	});

});