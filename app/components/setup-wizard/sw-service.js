/* $Id$ */

import Ember from 'ember';

export default Ember.Component.extend({
	actions : {
  		addService : function(){
         var self = this;
         self.sendAction("action");
      },

      addAction :function(){
         $('.addplus').addClass('hide-imp');
         $(".addnew-container").css('display','block');
         $(".cancelService").removeClass('hide-imp');
      },

      cancelService :function(){
        $("input[type=text], textarea").val("");
        $(".addnew-container").css('display','none');
        $('.addplus').removeClass('hide-imp');
      }
	}
});