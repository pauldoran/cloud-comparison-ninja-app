'use strict';

angular.module('cloudComparisonNinjaApp')
  .controller('ResultsCtrl', function ($scope, $http, socket, ngAudio) {
    ngAudio.load("assets/js/punch.wav").play();
    $scope.perftestresults = [];
    $scope.providers = [];

    var buildResults = function(){
      var tempResults = [];
      for (var i = 0; i < $scope.perftestresults.length; i++) {
        var tempResult = {};
        tempResult.provider = undefined;
        tempResult.region = undefined;
        tempResult.cpuCount = $scope.perftestresults[i].specs.cpu.length;
        tempResult.ram = $scope.perftestresults[i].specs.mem.total;
        tempResult.cost = undefined;
        tempResults.push(tempResult);
      }
      $scope.results = tempResults;
    };
    $scope.results = [];

    $http.get('/api/perftestresults').success(function(perftestresults) {
      $scope.perftestresults = perftestresults;
      buildResults();
      socket.syncUpdates('perftestresult', $scope.perftestresults);
    });

    $http.get('/api/providers').success(function(providers) {
      $scope.providers = providers;
      socket.syncUpdates('providers', $scope.providers);
    });
  });
