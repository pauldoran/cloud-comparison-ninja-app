'use strict';
// jshint ignore: start
angular.module('cloudComparisonNinjaApp')
  .controller('SpiderCtrl', function ($scope, $http, socket) {
    $scope.results = [[]];

    var transformResults = function(perftestresults){
      var toReturn = [];
      for (var i = 0; i < perftestresults.length; i++) {
        var result = [];
        result.push({axis: 'Disk Read', value: perftestresults[i].perf.disk.read});
        result.push({axis: 'Disk Write', value: perftestresults[i].perf.disk.write});
        result.push({axis: 'CPU Single Thread', value: perftestresults[i].perf.cpu.single_thread});
        result.push({axis: 'CPU Multi Thread', value: perftestresults[i].perf.cpu.multi_thread});
        result.push({axis: 'Memory', value: perftestresults[i].perf.mem});
        result.push({axis: 'Number of CPUs', value: perftestresults[i].specs.cpu.length});
        result.push({axis: 'Memory Total Gb', value: perftestresults[i].specs.mem.total});
        toReturn.push(result);
      }
      return toReturn;
    };

    $http.get('/api/perftestresults').success(function(results) {
      $scope.results = transformResults(results);
      socket.syncUpdates('perftestresult', $scope.results);
    });

  });
