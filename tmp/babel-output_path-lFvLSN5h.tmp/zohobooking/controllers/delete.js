/* $Id$ */

import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		error: function error(_error, trans) {
			console.log("error");
		}
	}
});