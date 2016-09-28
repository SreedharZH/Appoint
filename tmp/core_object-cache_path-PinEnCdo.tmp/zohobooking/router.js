define('zohobooking/router', ['exports', 'ember', 'zohobooking/config/environment'], function (exports, Ember, config) {

  'use strict';

  /* $Id$ */

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
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
    this.route('test');
  });

  exports['default'] = Router;

});