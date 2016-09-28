/* $Id$ */

import DS from 'ember-data';

export default DS.RESTSerializer.extend({

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