'use strict';

var en_translations = {
  HOME: 'Home',
  RESULTS: 'Results'
};

var it_translations = {
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

    $translateProvider.translations('en', en_translations).preferredLanguage('en');
    $translateProvider.translations('it', it_translations).preferredLanguage('it');
  });
