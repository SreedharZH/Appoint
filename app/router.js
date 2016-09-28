/* $Id$ */

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', function() { // No I18N
    this.route("home", {path: '/'}, function() { // No I18N
      this.route('homepageContainer'); // No I18N
    }); // No I18N
  //   this.route('add', {path: '/add'});// No I18N
  });

  this.route('index', {path: '/'});

  this.route('exam', function() {});
  this.route('calendar');
});

export default Router;
