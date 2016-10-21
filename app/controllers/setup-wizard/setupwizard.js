import Ember from 'ember';

export default Ember.Controller.extend({
 isAm:true,
    actions: {
       switchampm: function(){
         this.toggleProperty('isAm');
       },
      applyToAll: function(){
        $('.appointtable.list-row').find('.fromtime').find('.select2-selection__rendered').text($('.appointtable.list-row').eq(1).find('.fromtime').find('.select2-selection__rendered').text());
          $('.appointtable.list-row').find('.totime').find('.select2-selection__rendered').text($('.appointtable.list-row').eq(1).find('.totime').find('.select2-selection__rendered').text());
      },
          nextStep: function(){
            if(!($('.tabcontainer.active').last().index()==($('.tabcontainer').length-1))){
              $('.tabcontainer.active').removeClass('active').next().addClass('active');

              $('.steplinks li.active').removeClass('active').next().addClass('active');
              $('.steplinks li.active').prev().addClass('modified');
              if($('.tabcontainer.active').last().index()==3){
                 $('.steplinks li').addClass('modified');
              }
              if($('.tabcontainer.active').last().index()==3){
                 $('.btn-nxt').find('button').text('Finish');
                 $('.addnew-container').css('display','block');
              }
              else {
                $('.btn-nxt').find('button').text('Next');
              }
            }
           var index =$(".tabcontainer.active").index() + 1;
           $(".steps").html("<span>Step &nbsp;" + index  + " of 4</span>");

          },


          pressed: function() {
              $(".steplinks li.modified").click(function(){
              var findloc = $(this).data('tab');
              $('.steplinks li').removeClass('active');
              $(this).addClass('active');
               $('.tabcontainer').removeClass('active');
               $("#"+findloc).addClass('active');
               if($('.tabcontainer.active').last().index()==3){
                  $('.btn-nxt').find('button').text('Finish');
               }
               else {
                 $('.btn-nxt').find('button').text('Next');
               }
            });
            var index =$(".tabcontainer.active").index() + 1;
            $(".steps").html("<span>Step &nbsp;" + index  + " of 4</span>");

          },


          addService : function(){
             var $serName = $("#serviceName").val();
             var $serTime = $("#serTime").val();
             var $serCost =$("#serCost").val();
             var markup = "<div class='tables servicetable boxsize no-top-bottom'><div class='tablecell'><span class='tabdetails'>" + $serName + "</span></div><div class='tablecell'><span class='tabdetails'>" + $serTime + "  </span></div><div class='tablecell'><span class='tabdetails'>" + $serCost + " </span><div class='icons'><span class='editicon'></span><span class='deleteicon'></span></div></div>";
             $("input[type=text], textarea").val("");
             $(".list-pages").append(markup);
             $(".addnew-container").css('display','none');
             $('.addplus').removeClass('hide-imp');
             $('.service-list').removeClass('hide-imp');
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
        },
        editicon : function(){
          alert('ss');


        },


      }


});

$(".editicon").click(function(){

$('.tables.servicetable').append('.addnew-container');
});
