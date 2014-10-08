'use strict';

describe('Controller: FightCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudComparisonNinjaApp'));

  var FightCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FightCtrl = $controller('FightCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
