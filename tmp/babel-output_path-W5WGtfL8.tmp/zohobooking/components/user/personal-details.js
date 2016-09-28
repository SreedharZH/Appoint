/* $Id$ */

import Ember from 'ember';

export default Ember.Component.extend({
	save: false,

	actions: {
		changeValue: function changeValue(elname) {
			Ember.$("[elname=" + elname + "]").siblings("input").prop("disabled", false);
			this.set("save", true); // No I18N
		},

		saveValue: function saveValue(elname) {
			Ember.$("[elname=" + elname + "]").siblings("input").prop("disabled", true);
			this.set("save", false); // No I18N
		}
	}
});