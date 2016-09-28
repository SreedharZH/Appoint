/* $Id$ */

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		var role = window.ZCB_APP.role;
		var email = window.ZCB_APP.email;
		var serverurl = window.ZCB_APP.serverurl;
		var appowner = window.ZCB_APP.appowner;
		var memberUrl = window.ZCB_APP.prefix + "://" + serverurl + "/booking/" + appowner + "/app";
		this.controllerFor("home.home").set("email", email); // No I18N
		this.controllerFor("home.home").set("memberUrl", memberUrl); // No I18N
		this.controllerFor("home.home").set("memberrole", memberrole); // No I18N

		var memberrole = false;
		if (role === 'Member') {
			memberrole = true;
			// var member = this.store.find('member', {'ACCOUNTID' : window.ZCB_APP.username}).then(function(mem){ return mem.get('firstObject');}); //, {'NAME' : 'Solai'});// No I18N
			// return member;
		}
		// else {
		// 	// var member = this.store.find('member', {'ACCOUNTID' : window.ZCB_APP.username}).then(function(mem){ return mem.get('firstObject');}); //, {'NAME' : 'Solai'});// No I18N
		// 	// return member;
		// 	var books = this.store.findAll('book');// No I18N
		// 	return books;
		// }
	}

});