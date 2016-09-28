define('zservice/services/service-functions', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/* $Id$ */

	var ServiceFunctions = Ember['default'].Service.extend({
		// requestServer : Ember.inject.service("request-server"),

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
		},

		constructStuObj: function constructStuObj(val) {
			var stuRecords = [];
			var stuRecordKeys = ["Batch", "ID", "Name", "StudentSemaster", "Deparment"]; // No I18N
			var stuRecord = {};
			for (var key in val) {
				val = val[key];
			}
			for (var i = 0; i < val.length; i++) {
				var temp = val[i];
				var count = 0;
				for (var stuRecordKey in temp) {
					stuRecord[stuRecordKeys[count]] = temp[stuRecordKey];
					count = count + 1;
				}
				stuRecords.pushObject(stuRecord);
			}
			return stuRecords;
		},

		getCurrentDateTime: function getCurrentDateTime() {
			var curDateTime = Date();
			var curDate = "";
			var separateValues = curDateTime.split(" ");
			var order = [2, 1, 3];
			for (var i = 0; i < 3; i++) {
				if (i == 2) {
					curDate = curDate + separateValues[order[i]];
				} else {
					curDate = curDate + separateValues[order[i]] + "-";
				}
			}

			var curTime = curDateTime.split(" ")[4];
			return curDate + " " + curTime;
		}

	});

	exports['default'] = ServiceFunctions;

});