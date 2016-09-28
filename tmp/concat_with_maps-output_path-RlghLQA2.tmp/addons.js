define('ember-cli-app-version/components/app-version', ['exports', 'ember', 'ember-cli-app-version/templates/app-version'], function (exports, Ember, layout) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'span',
    layout: layout['default']
  });

});
define('ember-cli-app-version/initializer-factory', ['exports', 'ember'], function (exports, Ember) {

  'use strict';



  exports['default'] = initializerFactory;
  var classify = Ember['default'].String.classify;

  function initializerFactory(name, version) {
    var registered = false;

    return function () {
      if (!registered && name && version) {
        var appName = classify(name);
        Ember['default'].libraries.register(appName, version);
        registered = true;
      }
    };
  }

});
define('ember-cli-app-version/templates/app-version', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modules/ember-cli-app-version/templates/app-version.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","version",["loc",[null,[1,0],[1,11]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ember-cli-app-version', ['ember-cli-app-version/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

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
define('zservice/initializers/request-server', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject('route', 'requestServer', 'service:request-server'); // No I18N
    application.inject('controller', 'requestServer', 'service:request-server'); // No I18N
    application.inject('adapter', 'requestServer', 'service:request-server'); // No I18N
    application.inject('component', 'requestServer', 'service:request-server'); // No I18N
    application.inject('service:service-functions', 'requestServer', 'service:request-server'); // No I18N
  }

  exports['default'] = {
    name: 'request-server', // No I18N
    initialize: initialize
  };

});
define('zservice/initializers/service-functions', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject('route', 'serviceFunctions', 'service:service-functions'); // No I18N
    application.inject('controller', 'serviceFunctions', 'service:service-functions'); // No I18N
    application.inject('adapter', 'serviceFunctions', 'service:service-functions'); // No I18N
    application.inject('serializer', 'serviceFunctions', 'service:service-functions'); // No I18N
    application.inject('component', 'serviceFunctions', 'service:service-functions'); // No I18N
    // application.inject('service:request-server', 'serviceFunctions', 'service:service-functions');
  }

  exports['default'] = {
    name: 'service-functions', // No I18N
    initialize: initialize
  };

});
define('zservice/serializers/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  /* $Id$ */

  exports['default'] = DS['default'].RESTSerializer.extend({

    primaryKey: 'ID', // No I18N

    /* 
      Remove Root Element 
       Input : { Locations : { ID : '', Name:''} }
       Output: { ID:'',Name:''}
    */
    serializeIntoHash: function serializeIntoHash(hash, type, record, options) {
      Ember.merge(hash, this.serialize(record, options));
    },

    serializeHasMany: function serializeHasMany(snapshot, json, relationship) {
      var key = relationship.key;
      var hasManyRecords = snapshot.get(key);

      json[key] = new Array();
      hasManyRecords.forEach(function (item, index) {
        json[key].push(item.id);
      });
    },

    serializeBelongsTo: function serializeBelongsTo(snapshot, json, relationship) {
      var key = relationship.key;
      var belongsToRecords = snapshot.get(key);
      json[key] = belongsToRecords.id;
    },

    /** Example : Shiruarun  Shiru-arun **/

    modelNameFromPayloadKey: function modelNameFromPayloadKey(payloadKey) {
      payloadKey = payloadKey.split("_Report")[0];
      console.log(payloadKey);
      return payloadKey;
    },

    // modelNameFromPayloadKey: function (key) {
    //     return key;
    //   },

    /*
       Update the Response JSON to the model after createRecord 
    */

    extractCreateRecord: function extractCreateRecord(store, type, payload, id, requestType) {

      var json = payload;
      payload = {};
      if (json) {

        var obj = json['formname'][1];

        if (obj['operation'][1]['status'] != 'Success') {

          payload[type.modelName] = obj['operation'][1]['values'];
        } else {
          payload[type.modelName] = obj['operation'][1]['values'];
          payload[type.modelName][this.get('primaryKey')] = obj['operation'][1]['values']['ID'].toString();
          store.setMetadataFor(type.modelName, obj['operation'][1]['status']);
        }
      }

      return this.extractSave(store, type, payload, id, requestType);
    },

    normalize: function normalize(typeClass, hash, prop) {
      if (typeof hash["StudentSemaster"] === "string") {
        hash["StudentSemaster"] = this.strToArray(hash["StudentSemaster"]);
      }
      this.normalizeId(hash);
      return hash;
    },

    normalizeRelationships: function normalizeRelationships(typeClass, hash) {
      if (this.keyForRelationship) {

        typeClass.eachRelationship(function (key, relationshipMeta) {

          if (relationshipMeta.kind === "hasMany") {
            // No I18N

            hash[key] = this.strToArray(hash[key]); // No I18N
          }
        });
      }
    },

    strToArray: function strToArray(str) {
      var temp = str.replace('[', ''); // No I18N
      temp = temp.replace(']', ''); // No I18N
      return temp.split(', '); // No I18N
    }

  });

});
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
define('zservice', ['zservice/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});
//# sourceMappingURL=addons.map