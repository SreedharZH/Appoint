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
		},

		commonFieldName: null,
		sortOrder: null,

		sortNativeCode: function sortNativeCode(objects) {
			var self = this;
			var length = objects.get("length");
			var objInternal = objects.get("content");
			if (self.commonFieldName === undefined && self.sortOrder) {
				objInternal.sort();
			} else if (self.commonFieldName === undefined && !self.sortOrder) {
				objInternal.reverse();
			} else {
				objInternal.sort(function (firstObj, secondObj) {
					var nameA = firstObj._data[self.commonFieldName].toLowerCase(),
					    nameB = secondObj._data[self.commonFieldName].toLowerCase();
					if (nameA > nameB) {
						//sort string ascending
						return true;
					} else {
						return false;
					}
				});
			}
		},

		sort: function sort(inpObj, order, fieldName) {
			if (order === undefined) order = true;

			var self = this;
			self.commonFieldName = fieldName;
			self.sortOrder = order;
			if (inpObj.then === undefined) {
				self.sortNativeCode(inpObj);
			} else {
				inpObj.then(function (objects) {
					self.sortNativeCode(objects);
				});
			}
		}

	});

	exports['default'] = ServiceFunctions;

});