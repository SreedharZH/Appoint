/* $Id$ */

import Ember from 'ember';

export default Ember.Component.extend({
	popup: false,
	actions: {
		closePopup: function closePopup(Id) {
			Ember.$("#" + Id).hide();
		}
	}
});