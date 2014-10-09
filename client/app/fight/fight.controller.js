'use strict';

angular.module('cloudComparisonNinjaApp')
  .controller('FightCtrl', function ($scope, $http, socket, ngAudio) {
    $scope.providers = [];
    $scope.combatants = [];
    $scope.perftestresults = [];
    $scope.fightSound = ngAudio.load('assets/sounds/rage_of_blades.wav');
    $scope.firstProvider = {};
    $scope.secondProvider = {};

    $http.get('/api/perftestresults').success(function(results) {
      $scope.perftestresults = results;
      socket.syncUpdates('perftestresult', $scope.perftestresults);
    });

    $http.get('/api/providers').success(function(providers) {
      $scope.providers = providers;
      socket.syncUpdates('providers', $scope.providers);
    });

    $scope.fight = function(){
      $scope.combatants = [];
      $scope.combatants.push($scope.perftestresults.filter(function(obj){
        return obj.id === $scope.firstProvider;
      })[0]);
      $scope.combatants.push($scope.perftestresults.filter(function(obj){
        return obj.id === $scope.secondProvider;
      })[0]);
      $scope.fightSound.play();
    };
  });
