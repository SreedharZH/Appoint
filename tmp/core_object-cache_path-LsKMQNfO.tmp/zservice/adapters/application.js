define('zservice/adapters/application', ['exports', 'ember', 'ember-data'], function (exports, Ember, DS) {

	'use strict';

	/* $Id$ */

	var adapter = DS['default'].RESTAdapter.extend({
		defaultSerializer: '-zservice', // No I18N

		init: function init() {
			this._super();
			this.set('headers', { // No I18N
				'Content-Type': 'application/x-www-form-urlencoded' // No I18N
			});
		},

		namespace: 'api', // No I18N

		prefix: window.ZCB_APP.prefix,
		host: window.ZCB_APP.serverurl,
		// authtoken : window.ZCB_APP.authtoken,
		applicationName: window.ZCB_APP.appname,
		zc_ownername: window.ZCB_APP.appowner,
		// scope: window.ZCB_APP.zcscope,

		action: "asdad", // No I18N

		AJAXPOST: 'POST', // No I18N
		AJAXGET: 'GET', // No I18N

		getReportName: function getReportName(formName) {

			return formName + "_Report"; // No I18N
		},

		getRecordURL: function getRecordURL(ownerName, appName, formName) {

			return ownerName + '/json/' + appName + '/form/' + formName + '/record'; // No I18N
		},

		pathForType: function pathForType(componentName) {
			if (this.action === 'add' || this.action === 'edit' || this.action === 'delete') {
				// No I18N
				return "json/write"; // No I18N
			} else if (this.action === 'view') {
					// return "mobile/xml/"+this.applicationName+"/view/"+this.getReportName(componentName)+'/';
					return "/mobile/json/" + this.applicationName + "/view/" + this.getReportName(componentName) + "/"; // No I18N
				}
		},

		createRecord: function createRecord(store, type, snapshot) {

			var adapter = this;
			adapter.action = "add"; // No I18N
			var data = {};
			var serializer = store.serializerFor(type.modelName);

			//Capitalize Model Name  - Form name in API call

			var url = adapter.buildURL(adapter.getServerTypeName(type), null, snapshot, "createRecord"); // No I18N
			serializer.serializeIntoHash(data, type, snapshot, {
				includeId: true
			});

			var XMLString = adapter.generateXMLStringFormTags(type, 'add', data); // No I18N
			data = {};
			data.XMLString = XMLString;
			var url = adapter.buildURL(type.modelName, null, snapshot, "createRecord"); // No I18N
			delete data.Email;
			return adapter.requestServer.sendAjax(url, data, adapter.AJAXPOST, adapter.action);
		},

		deleteRecord: function deleteRecord(store, type, snapshot) {

			var adapter = this;
			adapter.action = "delete";
			var data = { criteria: "ID=" + snapshot.id }; // No I18N
			var serializer = store.serializerFor(type.modelName);
			var url = adapter.buildURL(adapter.getServerTypeName(type), null, snapshot, "deleteRecord"); // No I18N
			var recordId = snapshot.id;

			var XMLString = adapter.generateXMLStringViewTags(type, 'delete', data, recordId); // No I18N
			data = {};
			data.XMLString = XMLString;
			var url = adapter.buildURL(type.modelName, null, snapshot, "createRecord"); // No I18N
			delete data.Email;
			return adapter.requestServer.sendAjax(url, data, adapter.AJAXPOST, adapter.action);
		},

		findAll: function findAll(store, type, record) {

			var adapter = this;
			adapter.action = "view"; // No I18N
			var data = {};

			var url = adapter.buildURL(adapter.getServerTypeName(type), null, null, "findAll"); // No I18N
			return adapter.requestServer.sendAjax(url, data, adapter.AJAXGET, adapter.action);
		},

		query: function query(store, type, _query) {

			var adapter = this;
			adapter.action = "view";
			var data = {};

			var serializer = store.serializerFor(type.modelName);
			var url = adapter.buildURL(adapter.getServerTypeName(type), null, null, _query, _query);
			return adapter.requestServer.sendAjax(url, _query, adapter.AJAXGET, adapter.action);
		},

		findRecord: function findRecord(store, type, id, record) {
			var adapter = this;
			adapter.action = "view"; // No I18N
			var data = {};
			data.ID = id; // No I18N
			// var sam = adapter.get("store").recordIsLoaded (type.modelName, id);
			// console.log("Store ::-" + store);
			// console.log("type ::-" + type);
			// console.log("id ::-" + id);
			// console.log("record ::-" + record);
			var url = adapter.buildURL(adapter.getServerTypeName(type), null, null, "findRecord"); // No I18N
			return adapter.requestServer.sendAjax(url, data, adapter.AJAXGET, adapter.action);
		},

		updateRecord: function updateRecord(store, type, snapshot) {

			var adapter = this;
			adapter.action = "edit"; // No I18N
			var data = {};
			var serializer = store.serializerFor(type.modelName);

			//Capitalize Model Name  - Form name in API call
			var url = adapter.buildURL(adapter.getServerTypeName(type), null, snapshot, "updateRecord"); // No I18N
			serializer.serializeIntoHash(data, type, snapshot, {
				includeId: false
			});
			var recordId = snapshot.id;
			var XMLString = adapter.generateXMLStringViewTags(type, 'update', data, recordId); // No I18N
			data = {};
			data.XMLString = XMLString;
			var url = adapter.buildURL(type.modelName, null, snapshot, "createRecord"); // No I18N
			delete data.Email;
			return adapter.requestServer.sendAjax(url, data, adapter.AJAXPOST, adapter.action);
		},

		generateXMLStringFormTags: function generateXMLStringFormTags(type, action, data) {
			var XMLString = "<formlist>"; // No I18N
			XMLString = XMLString + "<form name='" + this.getServerTypeName(type) + "'>"; // No I18N
			XMLString = XMLString + "<" + action + ">"; // No I18N
			XMLString = XMLString + this.generateFieldTag(data);
			XMLString = XMLString + "</" + action + "></form></formlist>"; // No I18N
			return this.generateZohoAppTag(XMLString);
		},

		generateXMLStringViewTags: function generateXMLStringViewTags(type, action, data, recordId) {

			var XMLString = "<viewlist>"; // No I18N
			var viewName = this.getReportName(this.getServerTypeName(type));
			if (action === "delete") {
				XMLString = XMLString + '<view name="' + viewName + '">'; // No I18N
				XMLString = XMLString + "<" + action + "><criteria>"; // No I18N
				XMLString = XMLString + '<![CDATA[(ID=="' + recordId + '")]]>'; // No I18N
				XMLString = XMLString + "</criteria>"; // No I18N
				XMLString = XMLString + "</" + action + "></view></viewlist>"; // No I18N
			} else if (action === "update") {
					XMLString = XMLString + '<view name="' + viewName + '">'; // No I18N
					XMLString = XMLString + "<" + action + "><criteria>"; // No I18N
					XMLString = XMLString + '<![CDATA[(ID=="' + recordId + '")]]>'; // No I18N
					XMLString = XMLString + "</criteria><newvalues>"; // No I18N
					XMLString = XMLString + this.generateFieldTag(data);
					XMLString = XMLString + "</newvalues></" + action + "></view></viewlist>"; // No I18N
				}
			return this.generateZohoAppTag(XMLString);
		},

		generateZohoAppTag: function generateZohoAppTag(xmlStr) {

			var XMLString = "<ZohoCreator>"; // No I18N
			XMLString = XMLString + "<applicationlist>"; // No I18N
			XMLString = XMLString + "<application name='" + this.applicationName + "'>"; // No I18N
			XMLString = XMLString + xmlStr;
			XMLString = XMLString + "</application></applicationlist>"; // No I18N
			XMLString = XMLString + "</ZohoCreator>"; // No I18N
			return XMLString;
		},

		generateFieldTag: function generateFieldTag(data) {
			var XMLString = "";
			for (var key in data) {
				XMLString = XMLString + "<field name='" + key + "'>"; // No I18N
				if (data[key] instanceof Array && data[key] != [null]) {
					XMLString = XMLString + "<options>";
					var temp = data[key];
					for (var i = 0; i < data[key].length; i++) {
						XMLString = XMLString + "<option><![CDATA[" + temp[i] + "]]></option>"; // No I18N
					}
					XMLString = XMLString + "</options>";
				} else {
					XMLString = XMLString + "<value><![CDATA[" + data[key] + "]]></value>"; // No I18N
				}
				XMLString = XMLString + "</field>"; // No I18N
			}
			return XMLString;
		},

		getServerTypeName: function getServerTypeName(type) {
			return Ember['default'].String.classify(type.modelName);
		},

		handleResponse: function handleResponse(status, headers, payload) {
			return payload;
		}

	});

	exports['default'] = adapter;

});