define('zohobooking/tests/helpers/resolver', ['exports', 'ember/resolver', 'zohobooking/config/environment'], function (exports, Resolver, config) {

  'use strict';

  /* $Id$ */

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});