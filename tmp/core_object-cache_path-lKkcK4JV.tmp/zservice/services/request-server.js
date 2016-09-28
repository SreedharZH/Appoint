define('zservice/services/request-server', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	var RequestServer = Ember['default'].Service.extend({
		// serviceFunctions : Ember.inject.service("service-functions"),
		prefix: window.ZCB_APP.prefix,
		host: window.ZCB_APP.serverurl,
		authtoken: window.ZCB_APP.authtoken,
		applicationName: window.ZCB_APP.appname,
		zc_ownername: window.ZCB_APP.appowner,
		scope: window.ZCB_APP.zcscope,

		appendAuthToken: function appendAuthToken(data) {
			// data.authtoken = this.authtoken;
			// data.scope = this.scope;
			return data;
		},

		sendAjax: function sendAjax(url, data, method, action) {

			var service = this;
			url = this.prefix + "://" + url;

			data.zc_ownername = this.zc_ownername;
			data.zccpn = window.ZCB_APP.CSRF_TOKEN;
			if (action == 'view') {
				data.raw = true;
			} else if (action === "add" || action === "edit" || action === "delete") {
				data.zcRefValue = true;
				data.formAccessType = 1;
				data.errorLog = true;
				data.isMobileApi = true;
				data.childFormAccessType = 1;
				data = service.appendAuthToken(data);
			}

			return new Ember['default'].RSVP.Promise(function (resolve, reject) {
				$.ajax({
					type: method, // No I18N
					url: url,
					data: data,
					dataType: 'json' // No I18N
				}).then(function (res) {
					// var val = null;
					// for (var key in res){
					// 		val = key;
					// 	}
					// if (action === "view" && val === "Student"){
					// 	res = service.constructObj(res);
					// 	console.log("Ajax ::-",res)
					// }
					if (action == "add" || action == "delete" || action == "edit") {
						var message = { errors: { status: null, criteria: null } };
						var temp = service.findKeyPair(res, "status").split(","); // No I18N
						message.errors.status = temp[0]; // No I18N
						message.errors.criteria = temp[1]; //service.serviceFunctions.findKeyPair(res,"criteria"); // No I18N
						// var error = adapter.handleResponse(null,null,message);
						// var error = message;
						// reject(message);
					}
					// Ember.run(null, resolve, res);
					resolve(res);
				}, function (jqXHR) {
					jqXHR.then = null; // tame jQuery's ill mannered promises
					Ember['default'].run(null, reject, jqXHR);
				});
			});
		},

		getStuRecord: function getStuRecord(viewLinkName) {
			var self = this;
			var url = self.host + "/api/json/library-management/view/" + viewLinkName + "/?"; // No I18N
			var method = "GET"; // No I18N
			var data = {};
			var action = "view"; // No I18N
			var res = self.sendAjax(url, data, method, action);
			return res;
		},

		callFunctionAPI: function callFunctionAPI(email, process) {
			var self = this;
			var url = self.host + "/booking/" + self.zc_ownername + "/" + process; // No I18N
			var method = "GET"; // No I18N
			var data = {};
			data.email = email;
			var action = "function"; // No I18N
			var res = self.sendAjax(url, data, method, action);
			return res;
		},

		findKeyPair: function findKeyPair(payload, searchVal) {
			if (!payload.hasOwnProperty(searchVal)) {
				for (var key in payload) {
					if (typeof payload[key] == "object" && payload[key]) {
						return this.findKeyPair(payload[key], searchVal);
					}
				}
			} else {
				return payload[searchVal];
			}
		}
	});

	exports['default'] = RequestServer;

});