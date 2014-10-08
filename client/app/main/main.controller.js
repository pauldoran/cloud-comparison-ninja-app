'use strict';

angular.module('cloudComparisonNinjaApp')
  .controller('MainCtrl', function ($scope, $timeout, ngAudio) {
    ngAudio.load('assets/sounds/punch.wav').play();
    $scope.sound = ngAudio.load('assets/sounds/gong.wav');
    $scope.awesomeThings = [];
    $scope.ninjaLogo = false;
    $timeout(function(){
      $scope.sound.play();
      $scope.ninjaLogo = true;
      }, 1000);

  });
