/* $Id$ */

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		console.log("Test ::-" + this.requestServer);
		var stuSemaster = this.store.findAll('StudentSemaster'); // No I18N
		return stuSemaster;
	}
});