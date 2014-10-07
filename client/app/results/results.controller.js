'use strict';

angular.module('cloudComparisonNinjaApp')
  .controller('ResultsCtrl', function ($scope, $http, socket) {
    $scope.results = [];

    $http.get('/api/perftestresults').success(function(results) {
      $scope.results = results;
      socket.syncUpdates('perftestresult', $scope.results);
    });
  });
