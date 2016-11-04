/* $Id$ */

import Ember from 'ember';

export default Ember.Component.extend({
	actions : {
		switchampm: function(){
			 // this.toggleProperty('isAm');
			 var self = this;
			 if (event.target.tagName === "SPAN") {
			    var selectedTag = $(event.target);
			 }
			 else {
			    var selectedTag = $(event.target).find(".selected");
			 }
			 selectedTag.removeClass("selected")
			 if (selectedTag.next()) {
			  selectedTag.next().addClass("selected");
			 }
			 if (selectedTag.prev()) {
			  selectedTag.prev().addClass("selected");
			 }
		},

		applyToAll: function(){

				 $('.appointtable.list-row').find('.fromtime').find('.select2-selection__rendered').text($('.appointtable.list-row').eq(1).find('.fromtime').find('.select2-selection__rendered').text());
				 $('.appointtable.list-row').find('.totime').find('.select2-selection__rendered').text($('.appointtable.list-row').eq(1).find('.totime').find('.select2-selection__rendered').text());

				 //alert($('.appointtable').eq(0).children('.appointtabcell').length);
				 $('.appointtable').children('.appointtabcell').eq(0).addClass('hide-imp');
				 if($('.appointtable.list-row').eq(1).children('.appointtabcell').eq(1).find('.selected').index() === 0){
					 		//$('.appointlist').find('.appointtable').find('.appointtabcell').eq(1).addClass('hide-imp');
							  $('.appointtable.list-row').children('.appointtabcell').find('.fromTimeMeridiem').find('.swap').removeClass('selected');
					 	  $('.appointtable.list-row').children('.appointtabcell').find('.fromTimeMeridiem').find('.swap').eq(1).addClass('selected');
				 }
				 else {
						 $('.appointtable.list-row').children('.appointtabcell').find('.swap').removeClass('selected');
						 $('.appointtable.list-row').children('.appointtabcell').eq(1).find('.swap').eq(0).addClass('selected');
				 }

      	},

      	toggleDay: function() {
      		var self = this;
      		var checkbox;
      		if ($(event.target).attr("aria-checked") === undefined) {
      			checkbox = $(event.target).parents(".checkbox.isChecked");
      		}
      		else {
      			checkbox = event.target;
      		}
      		if (JSON.parse($(checkbox).attr("aria-checked"))) {
      			$(checkbox).attr("aria-checked", false);
      			$(checkbox).parents(".appointtable").addClass("non-businessday");
      		}
      		else {
      			$(checkbox).attr("aria-checked", true);
      			$(checkbox).parents(".appointtable").removeClass("non-businessday");
      		}
      	}
	}
});
