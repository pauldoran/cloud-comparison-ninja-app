'use strict';
// jshint ignore: start
angular.module('cloudComparisonNinjaApp')
  .controller('ResultsCtrl', function ($scope, $http, socket, ngAudio) {
    ngAudio.load('assets/js/punch.wav').play();
    $scope.perftestresults = [];
    $scope.providers = [];

    var buildResults = function(){
      var tempResults = [];
      for (var i = 0; i < $scope.perftestresults.length; i++) {
        var tempResult = {};
        var provider = $scope.providers.filter(function(obj){
          return obj.id === $scope.perftestresults[i].id;
        })[0];
        if(provider){
        tempResult.provider = provider.provider;
        tempResult.region = provider.region;
        tempResult.cpuCount = $scope.perftestresults[i].specs.cpu.length;
        tempResult.ram = $scope.perftestresults[i].specs.mem.total;
        tempResult.cost = provider.cost;
        tempResults.push(tempResult);
      }
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
      buildResults();
      socket.syncUpdates('providers', $scope.providers);
    });
  });
