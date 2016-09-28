/* $Id$ */

/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'zohobooking', // No I18N
    environment: environment,
    baseURL: '/',
    rootURL: '/',
    locationType: 'auto', // No I18N
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {

    }
  };

  if (environment === 'development') {  // No I18N
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {// No I18N
    // Testem prefers this...
    ENV.baseURL = '/';// No I18N
    ENV.locationType = 'none';// No I18N

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';// No I18N
  }

  if (environment === 'production') {// No I18N
  ENV.locationType = 'hash';
  }

  return ENV;
};
