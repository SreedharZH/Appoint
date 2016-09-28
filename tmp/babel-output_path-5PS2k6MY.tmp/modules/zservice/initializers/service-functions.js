export { initialize };
/* $Id$ */

function initialize(container, application) {
  application.inject('route', 'serviceFunctions', 'service:service-functions'); // No I18N
  application.inject('controller', 'serviceFunctions', 'service:service-functions'); // No I18N
  application.inject('adapter', 'serviceFunctions', 'service:service-functions'); // No I18N
  application.inject('serializer', 'serviceFunctions', 'service:service-functions'); // No I18N
  application.inject('component', 'serviceFunctions', 'service:service-functions'); // No I18N
  // application.inject('service:request-server', 'serviceFunctions', 'service:service-functions');
}

export default {
  name: 'service-functions', // No I18N
  initialize: initialize
};