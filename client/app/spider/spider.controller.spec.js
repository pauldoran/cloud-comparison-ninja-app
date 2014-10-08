'use strict';

describe('Controller: SpiderCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudComparisonNinjaApp'));

  var SpiderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpiderCtrl = $controller('SpiderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
