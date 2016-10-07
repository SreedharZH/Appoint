import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
        pressed: function() {
          $(".steplinks li").click(function(){
            var findloc = $(this).data('tab');
            $('.steplinks li').removeClass('active');
            $(this).addClass('active');
             $('.tabcontainer').removeClass('active');
             $("#"+findloc).addClass('active');


          })

        }
    }
});
