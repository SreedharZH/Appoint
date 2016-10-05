define('web-app/app', ['exports', 'ember', 'web-app/resolver', 'ember-load-initializers', 'web-app/config/environment'], function (exports, _ember, _webAppResolver, _emberLoadInitializers, _webAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _webAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _webAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _webAppResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _webAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});