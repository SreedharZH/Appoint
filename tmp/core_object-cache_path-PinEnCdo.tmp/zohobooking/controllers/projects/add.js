define('zohobooking/controllers/projects/add', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	exports['default'] = Ember['default'].Controller.extend({
		selectedBands: [],
		userArray: [],
		actions: {

			addProject: function addProject() {
				var userObj = null;
				for (var i = 0; i < this.selectedBands.length; i++) {
					userObj = this.store.getById('user', this.selectedBands[i]);
					console.log("userObj ::-", userObj);
					this.userArray.pushObject(userObj);
				}
				var project = this.store.createRecord('project', { 'Name': this.get('Name'), 'Users': this.userArray }); // No I18N
				project.save();
			},

			selectBand: function selectBand(event) {
				var selectedBands = Ember['default'].$(event.target).val();
				this.set('selectedBands', selectedBands || []); // No I18N
			},

			updateRec: function updateRec() {
				this.store.find("project", 2000000008099).then(function (record) {
					record.set('Name', "ZUTK-B3"); // No I18N
					record.save();
				});
			},

			deleteRec: function deleteRec() {
				this.store.find("project", 2000000008099).then(function (record) {
					record.deleteRecord();
					record.save();
				});
			}
		}
	});

});