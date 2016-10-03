import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('setupWizard', function() {
    this.route('Businessinfo');
    this.route('Businesshours');
    this.route('step1');
    this.route('step2');
    this.route('step3');
    this.route('staff1');
    this.route('step1-binfo');
    this.route('step2-bhours');
    this.route('step3-service');
    this.route('step4-staff');
    this.route('1Binfo');
    this.route('2Bhours');
    this.route('3Service');
    this.route('4Staff');
  });

  this.route('myDesk', function() {
    this.route('mydesk');
  });

  this.route('Appointments', function() {
    this.route('Calendar');
  });

  this.route('Customers', function() {
    this.route('Customer');
  });

  this.route('businessSetup', function() {
    this.route('binfo');
    this.route('services');
    this.route('staff');
    this.route('notification');
    this.route('pageDesign');
    this.route('bookingPreference');
    this.route('payment');
    this.route('integration');
    this.route('service');
  });

  this.route('businessSet', function() {
    this.route('service');
  });

  this.route('components', function() {
    this.route('myDesk', function() {
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

    this.route('businessSetup', function() {
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
