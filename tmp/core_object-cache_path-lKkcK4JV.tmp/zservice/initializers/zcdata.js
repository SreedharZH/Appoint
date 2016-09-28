define('zservice/initializers/zcdata', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject('route', 'zcdata', 'service:zcdata'); // No I18N
    application.inject('controller', 'zcdata', 'service:zcdata'); // No I18N
    application.inject('adapter', 'zcdata', 'service:zcdata'); // No I18N
    application.inject('serializer', 'zcdata', 'service:zcdata'); // No I18N
    application.inject('component', 'zcdata', 'service:zcdata'); // No I18N
    // application.inject('service:request-server', 'serviceFunctions', 'service:service-functions');
  }

  exports['default'] = {
    name: 'zcdata', // No I18N
    initialize: initialize
  };

});