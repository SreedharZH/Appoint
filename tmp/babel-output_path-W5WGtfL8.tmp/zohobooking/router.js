/* $Id$ */

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.resource('home', function () {
    // No I18N
    this.route("home", { path: '/' }, function () {
      // No I18N
      this.route('homepageContainer'); // No I18N
    }); // No I18N
    //   this.route('add', {path: '/add'});// No I18N
  });

  this.route('index', { path: '/' });

  // No I18N
  this.route('badurl', { path: '/*badurl' });

  this.route('userhome', function () {
    this.route('userhome', { path: '/' });
    this.route('user', { path: '/user' });
    this.route('admin', { path: '/admin' });
  });
  this.route('exam', function () {
    this.route('admin', function () {
      this.route('addTest');
      this.route('viewTest');
      this.route('addUser');
      this.route('addQuestion');
      this.route('viewUser');
    });
    this.route('user', function () {
      this.route('test');
    });
  });
});

export default Router;