/* $Id$ */

export function initialize(application) {
  application.inject('route', 'ajaxService', 'service:ajax-service'); // No I18N
  application.inject('controller', 'ajaxService', 'service:ajax-service'); // No I18N
  application.inject('adapter', 'ajaxService', 'service:ajax-service'); // No I18N
  application.inject('serializer', 'ajaxService', 'service:ajax-service'); // No I18N
  application.inject('component', 'ajaxService', 'service:ajax-service'); // No I18N
}

export default {
  name: 'ajax-service', // No I18N
  initialize: initialize
};