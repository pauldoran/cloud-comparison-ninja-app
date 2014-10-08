'use strict';

var enTranslations = {
  HOME: 'Home',
  RESULTS: 'Results',
  SPIDER: 'Spider',
  PROVIDER: 'Provider',
  REGION: 'Region',
  CPU_COUNT: 'CPU Count',
  RAM: 'RAM',
  COST: 'Cost'


};

var itTranslations = {
  HOME: 'Casa',
  RESULTS: 'Risultati',
  SPIDER: 'Ragno',
  PROVIDER: 'Fornitore',
  REGION: 'Regione',
  CPU_COUNT: 'CPU Contare',
  RAM: 'RAM',
  COST: 'Costo'
};

angular.module('cloudComparisonNinjaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate',
  'angular-radar',
  'ngAudio'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', enTranslations).preferredLanguage('en');
    $translateProvider.translations('it', itTranslations);
  });
