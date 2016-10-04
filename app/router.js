import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('setup-wizard', function() {
    this.route('1-binfo');
    this.route('2-bhours');
    this.route('3-service');
    this.route('4-staff');
  });

  this.route('components', function() {
    this.route('my-desk', function() {
      this.route('mydesk');
    });

    this.route('appointments', function() {
      this.route('calendar');
    });

    this.route('customers', function() {
      this.route('clist');
    });

    this.route('reports', function() {
      this.route('report');
    });

    this.route('business-setup', function() {
      this.route('binfo');
      this.route('service');
      this.route('staff');
      this.route('notification');
      this.route('pagedesign');
      this.route('bookingpreference');
      this.route('payment');
      this.route('integration');
      this.route('bsleftmenu');
    });
  });



});


export default Router;
