'use strict';

angular.module('cloudComparisonNinjaApp')
  .controller('MainCtrl', function ($scope, $timeout, ngAudio) {
    ngAudio.load("assets/js/punch.wav").play();
    $scope.sound = ngAudio.load("assets/js/gong.wav");
    $scope.awesomeThings = [];
    $scope.ninjaLogo = false;
    $timeout(function(){
      $scope.sound.play();
      $scope.ninjaLogo = true;
      }, 1000);

  });
