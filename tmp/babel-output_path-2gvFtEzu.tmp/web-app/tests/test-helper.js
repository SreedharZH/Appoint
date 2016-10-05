define('web-app/tests/test-helper', ['exports', 'web-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _webAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_webAppTestsHelpersResolver['default']);
});