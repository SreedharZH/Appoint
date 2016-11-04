/* $Id$ */

import Ember from 'ember';

export default Ember.Service.extend({
	prefixFirst : "ht", // No I18N
	prefixSec : "tp:", // No I18N
	host:"arun-zutk17.tsi.zohocorpin.com/zccallfunction.do", // No I18N
	sendAjax: function(data) {
		var self = this;
		var url = self.prefixFirst + self.prefixSec + "//" + self.host;
		data.zccpn = "297f2bef29dc750460dce365849d154a3939b68c29ec08ac44da1c6e9092672126c8b10710a50f1c26433b05b436d3912c6a608eacc49d7b59c056ba60a9e7b5"; // No I18N
		return new Ember.RSVP.Promise(function(resolve, reject) {
			$.ajax({
				url:url,
			    type: "POST", // No I18N
			    async:true,
			    processData:true,
				xhrFields: {
			    	withCredentials: true
			  	},
			    data: data
			 //    success:function(response, status, xhr){
				// 	console.log(response);
				// }
			}).done(function(res){
				resolve(res);
			}).fail(function(res){
				reject(res);
			});
		});
	}
});
// });

// var form_data = new FormData();

// for ( var key in data ) {
//     form_data.append(key, data[key]);
// }
// return new Ember.RSVP.Promise(function(resolve, reject) {

// $.ajax({
// url:url,
//     type: "POST",
//     async:true,
//     processData:true,
// xhrFields: {
//       withCredentials: true
//    },
//     data: data,
// }).done(function(res){
// resolve(res);
// }).fail(function(res){
// reject(res);
// });
// });