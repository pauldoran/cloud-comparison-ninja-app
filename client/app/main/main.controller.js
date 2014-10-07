'use strict';

angular.module('cloudComparisonNinjaApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, socket) {
    $scope.awesomeThings = [];
    $scope.ninjaLogo = false;
    $timeout(function(){$scope.ninjaLogo = true;}, 1000);

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
