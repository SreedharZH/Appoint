define('web-app/tests/helpers/resolver', ['exports', 'web-app/resolver', 'web-app/config/environment'], function (exports, _webAppResolver, _webAppConfigEnvironment) {

  var resolver = _webAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _webAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _webAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});