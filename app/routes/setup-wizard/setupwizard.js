import Ember from 'ember';

Ember.run.scheduleOnce('afterRender', this, function() {
  Ember.$('.header').hide();
     $(".stepstitle").fadeIn(300, function () {
     $(".setup-container").fadeIn(500);
   });
   
});


export default Ember.Route.extend({
});
