'use strict';

angular.module('cloudComparisonNinjaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('spider', {
        url: '/spider',
        templateUrl: 'app/spider/spider.html',
        controller: 'SpiderCtrl'
      });
  });