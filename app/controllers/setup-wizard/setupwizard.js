import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

          nextStep: function(){
            if(!($('.tabcontainer.active').last().index()==($('.tabcontainer').length-1))){
              $('.tabcontainer.active').removeClass('active').next().addClass('active');

              $('.steplinks li.active').removeClass('active').next().addClass('active');
              $('.steplinks li.active').prev().addClass('modified');
              if($('.tabcontainer.active').last().index()==3){
                 $('.steplinks li').addClass('modified');
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
            });
            var index =$(".tabcontainer.active").index() + 1;

            $(".steps").html("<span>Step &nbsp;" + index  + " of 4</span>");
          },


          addService : function(){
             var $serName = $("#serviceName").val();
             var $serTime = $("#serTime").val();
             var $serCost =$("#serCost").val();
             var markup = "<div class='tables border-light'><div class='tablecell'><span>" + $serName + "</span></div><div class='tablecell'><span>" + $serTime + " Mins </span></div><div class='tablecell'><span>" + $serCost + "cost </span></div></div>";
             $("input[type=text], textarea").val("");
             $(".list-pages").append(markup);
             $(".addServiceEnable").css('display','none');
             $('.addplus').removeClass('hide-imp');
          },
          addAction :function(){
             $('.addplus').addClass('hide-imp');
             $(".addServiceEnable").css('display','block');
             $(".cancelService").removeClass('hide-imp');
          },
          cancelService :function(){
          $("input[type=text], textarea").val("");
          $(".addServiceEnable").css('display','none');
          $('.addplus').removeClass('hide-imp');
        },


         switchbtn : function(){
           var $mark = this.children('.swap').text();
           alert($mark);
           if($mark.hasClass('showele')){
               $(".swap.switcham").removeClass('showele');
               $(".swap.switchpm").addClass('showele');
           }
        }
      }


});