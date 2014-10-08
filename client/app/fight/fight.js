'use strict';

angular.module('cloudComparisonNinjaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fight', {
        url: '/fight',
        templateUrl: 'app/fight/fight.html',
        controller: 'FightCtrl'
      });
  });