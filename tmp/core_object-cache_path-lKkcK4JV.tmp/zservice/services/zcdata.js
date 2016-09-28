define('zservice/services/zcdata', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Service.extend({
    commonFieldName: undefined,
    sortOrder: 1,

    getData: function getData(modelName, reload) {
      var self = this;
      if (reload) {
        return self.get("store").findAll(modelName);
      } else {
        return self.get("store").peekAll(modelName);
      }
    },

    sortNativeCode: function sortNativeCode(objects) {
      var self = this;
      var length = objects.get("length");
      var objInternal = objects.get("content");
      if (self.commonFieldName === undefined || self.commonFieldName === "id" && self.sortOrder) {
        objInternal.sort();
      } else if (self.commonFieldName === undefined || self.commonFieldName === "id" && !self.sortOrder) {
        objInternal.reverse();
      } else {
        objInternal.sort(function (firstObj, secondObj) {
          var compareValueOne = firstObj._data[self.commonFieldName].toLowerCase();
          var compareValueTwo = secondObj._data[self.commonFieldName].toLowerCase();
          if (self.sortOrder === 1) {
            if (compareValueOne > compareValueTwo) {
              //sort string ascending
              return true;
            } else {
              return false;
            }
          } else {
            if (compareValueOne < compareValueTwo) {
              //sort string descending
              return true;
            } else {
              return false;
            }
          }
        });
      }
    },

    sort: function sort(modelName, fieldName) {
      var order = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
      var reload = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      var self = this;
      if (typeof fieldName === "string") {
        self.commonFieldName = fieldName;
      } else if (typeof fieldName === "number") {
        self.sortOrder = fieldName;
      } else if (typeof fieldName === "boolean") {
        reload = fieldName;
      }
      if (typeof order === "boolean") {
        reload = order;
      }
      var inpObj = self.getData(modelName, reload);
      if (inpObj.then === undefined) {
        self.sortNativeCode(inpObj);
      } else {
        inpObj.then(function (objects) {
          self.sortNativeCode(objects);
        });
      }
      return inpObj;
    }
  });

});