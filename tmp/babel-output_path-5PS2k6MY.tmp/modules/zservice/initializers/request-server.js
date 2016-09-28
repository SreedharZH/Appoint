export { initialize };
/* $Id$ */

function initialize(container, application) {
  application.inject('route', 'requestServer', 'service:request-server'); // No I18N
  application.inject('controller', 'requestServer', 'service:request-server'); // No I18N
  application.inject('adapter', 'requestServer', 'service:request-server'); // No I18N
  application.inject('component', 'requestServer', 'service:request-server'); // No I18N
  application.inject('service:service-functions', 'requestServer', 'service:request-server'); // No I18N
}

export default {
  name: 'request-server', // No I18N
  initialize: initialize
};