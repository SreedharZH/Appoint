define('zservice/initializers/request-server', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject('route', 'requestServer', 'service:request-server'); // No I18N
    application.inject('controller', 'requestServer', 'service:request-server'); // No I18N
    application.inject('adapter', 'requestServer', 'service:request-server'); // No I18N
    application.inject('component', 'requestServer', 'service:request-server'); // No I18N
    application.inject('service:service-functions', 'requestServer', 'service:request-server'); // No I18N
  }

  exports['default'] = {
    name: 'request-server', // No I18N
    initialize: initialize
  };

});