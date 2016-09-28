define('zohobooking/controllers/stusemaster/add', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Controller.extend({
		actions: {
			addStusemaster: function addStusemaster() {
				var selectBands = this.store.getById('student', Ember['default'].$("#studentSelect").val()); // No I18N
				var stusemaster = this.store.createRecord('StudentSemaster', { 'Student': selectBands, 'Semaster': this.get('semaster'), 'Marks': this.get('marks') }); // No I18N
				stusemaster.save().then(function () {
					// console.log("USer :::-",user);
				}, function (response) {
					console.log("response :::-", response);
				});
			}
		}
	});

});