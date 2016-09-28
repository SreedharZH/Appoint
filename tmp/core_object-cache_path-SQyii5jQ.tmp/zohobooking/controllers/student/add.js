define('zohobooking/controllers/student/add', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Controller.extend({
		selectedBands: [],

		actions: {
			addStudent: function addStudent() {
				var stuSemaster = null;
				var deparment = Ember['default'].$("#departmentSelect").val(); // No I18N
				var batch = Ember['default'].$("#batchSelect").val(); // No I18N
				var stuSemasterArray = [];
				for (var i = 0; i < this.selectedBands.length; i++) {
					stuSemaster = this.store.getById('StudentSemaster', this.selectedBands[i]);
					stuSemasterArray.pushObject(stuSemaster);
				}
				var student = this.store.createRecord('student', { 'StudentName': this.get('name'), 'Deparment': deparment, 'Batch': batch, 'StudentSemaster': stuSemasterArray }); // No I18N
				student.save();
			},

			selectBand: function selectBand(event) {
				var selectedBands = Ember['default'].$(event.target).val();
				this.set('selectedBands', selectedBands || []); // No I18N
			},

			updateRec: function updateRec() {
				this.store.find("student", 2000000018021).then(function (record) {
					record.set('Batch', 2009); // No I18N
					record.save();
				});
			},

			deleteRec: function deleteRec() {
				this.store.find("student", 2000000018017).then(function (record) {
					record.deleteRecord();
					record.save();
				});
			}
		}
	});

});