/* $Id$ */

import Ember from 'ember';

Ember.run.scheduleOnce('afterRender', this, function() { // No I18N
  Ember.$('#header').hide();
     $("#stepstitle").fadeIn(300, function () {
     $("#setup-container").fadeIn(500);
   });
   $('#autocountryselect').select2({
       minimumResultsForSearch: Infinity
   });
   $(".selecttime").select2({
      minimumResultsForSearch: Infinity
   });
});

export default Ember.Route.extend({
    businessMAP : {},
    serviceList : [],
    staffList : [],

    actions: {
      toRailwayTime : function(time) {
          var splitedTime = time.split(":");
          var timeHour = parseInt(splitedTime[0]) + 12;
          return timeHour + ":" + splitedTime[1];
      },

      nextStep: function(){
        var self = this;
        if(!($('.tabcontainer.active').parent().last().index()==($('.tabcontainer').length-1))){
          // $('.tabcontainer.active').removeClass('active').next().addClass('active');
           $('.tabcontainer.active').removeClass("active").parent().next().find(".tabcontainer").addClass("active");

          $('.steplinks li.active').removeClass('active').next().addClass('active');
          $('.steplinks li.active').prev().addClass('modified');
          // if($('.tabcontainer.active').parent().last().index()==3){
          //    $('.steplinks li').addClass('modified');
          // }
          if($('.tabcontainer.active').parent().index()==1){
            self.businessMAP.BUSINESS_NAME = $("#BName").val();
            self.businessMAP.COMPANY_WEBSITE = "ht" + "tp://" + $("#BUrl").val() + ".zohoappointment.com"; // No I18N
            self.businessMAP.PHONE = $("#BPhneCode").val() + $("#BPhne").val();
            self.businessMAP.EMAIL = $("#BEmail").val();
            // self.businessMAP["COUNTRY"] = $("#autocountryselect").val;();
            $('.btn-back').removeClass('hide');
          }
          if ($('.tabcontainer.active').parent().index()==2) {
              var dayElements = $("[ele=dayDiv]");
              var scheduleList = [];
              var day = {};
              for (var i = 0; i < dayElements.length-1; i++) {
                var attrName = $(dayElements[i]).attr("name");
                var fromTimeDiv = $(dayElements[i]).parents(".appointtabcell").next();
                var inputFromVal = fromTimeDiv.find("#" + attrName +"-FROM").val();
                if (inputFromVal.trim() != "") {
                  var fromTimeMeridiem = fromTimeDiv.find(".selected").attr("name"); // No I18N
                  var toTimeDiv = fromTimeDiv.next();
                  var inputToVal = toTimeDiv.find("#" + attrName +"-TO").val();
                  if (inputToVal.trim() != "") {
                    var toTimeMeridiem = toTimeDiv.find(".selected").attr("name"); // No I18N
                    if (fromTimeMeridiem == "PM") {
                      inputFromVal = self.actions.toRailwayTime(inputFromVal);
                    }
                    else if (toTimeMeridiem == "PM") {
                      inputToVal = self.actions.toRailwayTime(inputToVal);
                    }
                    var dayTime = {};
                    var dayArray = [];
                    dayTime.FROM = inputFromVal + ":00"; // No I18N
                    dayTime.TO = inputToVal + ":00"; // No I18N
                    dayArray.pushObject(dayTime);
                    day[attrName] = dayArray;
                  }
                }
              }
              scheduleList.pushObject(day);
              self.businessMAP.BUSINESS_HOURS = scheduleList;
          }

          // if($('.btn-nxt').find('button').hasClass('finish')){
          //   this.transitionTo('/my-desk/mydesk');
          // }
          if($('.tabcontainer.active').parent().last().index()==3){
             $('.btn-nxt').find('button').text('Finish').addClass('finish'); // No I18N
             $('.addnew-container').css('display','block');
          }
          else {
            $('.btn-nxt').find('button').text('Next'); // No I18N
          }
      }
      else {
          var roll = $("#sRoll").find("input[name='optionsRadios']:checked").attr("id");
          var staffName = $("#SName").val();
          var email = $("#SEmail").val();
          var staffMap = {};
          staffMap.NAME = staffName;
          staffMap.PERMISSION = roll;
          staffMap.EMAIL_1 = email;
          self.staffList.pushObject(staffMap);
          // var data = new FormData();
          var BUSINESS_MAP = {};
          BUSINESS_MAP.BUSINESS_INFO = self.businessMAP;
          BUSINESS_MAP.SERVICES = self.serviceList;
          BUSINESS_MAP.STAFFS = self.staffList;
          BUSINESS_MAP = JSON.stringify(BUSINESS_MAP);
          // data.append("args-BUSINESS_MAP", BUSINESS_MAP);
          // data.append("namespace", "SetupWizard");
          // data.append("functionname", "setupBusiness");
          // data.append("appLinkName", "appointment-booking");

          var data = {
            "args-BUSINESS_MAP" : BUSINESS_MAP,  // No I18N
            "namespace" : "SetupWizard",  // No I18N
            "functionname" : "setupBusiness",  // No I18N
            "appLinkName" : "appointment-booking" // No I18N
          };

          // data["args-BUSINESS_MAP"] = JSON.stringify(BUSINESS_MAP);
          // data["namespace"] = self.nameSpace;
          // data["functionname"] = self.functionName;

          self.ajaxService.sendAjax(data);
      }
       var index =$(".tabcontainer.active").parent().index() + 1;
       $(".steps").html("<span>Step &nbsp;" + index  + " of 4</span>"); // No I18N

      },


      backStep: function(){
        $('.tabcontainer.active').removeClass("active").parent().prev().find(".tabcontainer").addClass("active");
        $('.steplinks li.active').removeClass('active').prev().addClass('active');
        $('.steplinks li.active').next().removeClass('modified');

        if ($('.tabcontainer.active').parent().index() === 0){
          $('.btn-back').addClass('hide');
        }

       var index =$(".tabcontainer.active").parent().index()+1;
       $(".steps").html("<span>Step &nbsp;" + index  + " of 4</span>"); // No I18N
       // if($('.tabcontainer.active').parent().last().index()==2){
       //    $('.btn-nxt').find('button').text('Finish');
       //    $('.addnew-container').css('display','block');
       // }
       if ($('.tabcontainer.active').parent().last().index()==2) {
         $('.btn-nxt').find('button').text('Next'); // No I18N
       }

      },


      pressed: function() {
        $(".steplinks li.modified").click(function(){
            var findloc = $(this).data('tab');
            $('.steplinks li').removeClass('active');
            $(this).addClass('active');
            $(this).nextAll(".modified").removeClass("modified");
            $(this).prevAll().addClass("modified");
            $('.tabcontainer').removeClass('active');
            $("#"+findloc).addClass('active');
            if($('.tabcontainer.active').last().index()==3){
              $('.btn-nxt').find('button').text('Finish'); // No I18N
            }
            else {
              $('.btn-nxt').find('button').text('Next'); // No I18N
            }
        });
        var index =$(".tabcontainer.active").index() + 1;
        $(".steps").html("<span>Step &nbsp;" + index  + " of 4</span>"); // No I18N
      },

      addService : function(){
           var self = this;
           var serviceMap = {};
           var $serName = $("#serviceName").val();
           var $serTime = $("#serTime").val();
           var $serCost =$("#serCost").val();
           serviceMap.NAME = $serName;
           serviceMap.DURATION = "00:" + $serTime + ":00"; // No I18N
           self.serviceList.pushObject(serviceMap);
           var markup = "<div class='tables servicetable boxsize no-top-bottom'><div class='tablecell'><span class='tabdetails'>" + $serName + "</span></div><div class='tablecell'><span class='tabdetails'>" + $serTime + "  </span></div><div class='tablecell'><span class='tabdetails'>" + $serCost + " </span><div class='icons'><span class='editicon' onclick='editfunction()'></span><span class='deleteicon'></span></div></div>";
           // $("input[type=text], textarea").val("");
           $(".list-pages").append(markup);
           $(".addnew-container").css('display','none');
           $('.addplus').removeClass('hide-imp');
           $('.service-list').removeClass('hide-imp');
      }
    }
});
