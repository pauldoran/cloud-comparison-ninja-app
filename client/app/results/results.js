'use strict';

angular.module('cloudComparisonNinjaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('results', {
        url: '/results',
        templateUrl: 'app/results/results.html',
        controller: 'ResultsCtrl'
      });
  });