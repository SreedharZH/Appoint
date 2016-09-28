define('zohobooking/tests/helpers/start-app', ['exports', 'ember', 'zohobooking/app', 'zohobooking/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  /* $Id$ */

  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});