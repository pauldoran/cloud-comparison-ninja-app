'use strict';

var enTranslations = {
  HOME: 'Home',
  RESULTS: 'Results'
};

var itTranslations = {
  HOME: 'Casa',
  RESULTS: 'Risultati'
};

angular.module('cloudComparisonNinjaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', enTranslations).preferredLanguage('en');
    $translateProvider.translations('it', itTranslations).preferredLanguage('it');
  });
