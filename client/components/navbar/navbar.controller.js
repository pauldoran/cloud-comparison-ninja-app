'use strict';

angular.module('cloudComparisonNinjaApp')
  .controller('NavbarCtrl', function ($scope, $location, $translate) {
    $scope.menu = [{
      'title': 'HOME',
      'link': '/'
    },
    {
      'title': 'RESULTS',
      'link': '/results'
    },
    {
      'title': 'SPIDER',
      'link': '/spider'
    }];

    $scope.languages = [{
      'name': 'English',
      'langKey': 'en'
    },
    {
      'name': 'Italiano',
      'langKey': 'it'
    }

    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.switchLanguage = function(lang){
      $translate.use(lang.langKey);
    };
  });
