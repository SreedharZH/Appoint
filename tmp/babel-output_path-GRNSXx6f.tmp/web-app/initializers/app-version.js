define('web-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'web-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _webAppConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_webAppConfigEnvironment['default'].APP.name, _webAppConfigEnvironment['default'].APP.version)
  };
});