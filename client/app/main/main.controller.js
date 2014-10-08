'use strict';

angular.module('cloudComparisonNinjaApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [];
    $scope.ninjaLogo = false;
    $timeout(function(){$scope.ninjaLogo = true;}, 1000);

  });
