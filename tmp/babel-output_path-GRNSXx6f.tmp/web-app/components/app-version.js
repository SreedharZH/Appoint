define('web-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'web-app/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _webAppConfigEnvironment) {

  var name = _webAppConfigEnvironment['default'].APP.name;
  var version = _webAppConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});