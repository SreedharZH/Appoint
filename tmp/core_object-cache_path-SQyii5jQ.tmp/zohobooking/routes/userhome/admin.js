define('zohobooking/routes/userhome/admin', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			// // this.get("store").findAll("test").then(function(val){
			// // 	console.log("Val ::-",val);
			// // });
			// var tests = this.get("store").findAll("test");
			// tests.then(function(val){
			// 	console.log("Val ::-",val);
			// 	// var temp = val.get("firstObject").get("MARK_CORRECT");
			// 	// console.log("Temp ::- ",temp);
			// 	val.forEach(function(test,index){
			// 		console.log("Id :::-",test.id);
			// 	})
			// });
		}
	});

});