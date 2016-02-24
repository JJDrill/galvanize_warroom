angular.module('gWarRoom')
  .controller('ServerListController', ServerListController);

  ServerListController.$inject = ['$scope', 'ServerStatsService'];

  function ServerListController($scope, ServerStatsService) {
    console.log("ServerListController");

    ServerStatsService.on(function (data) {
      // $scope.bids.push(data)
      $scope.serverList = data
      console.log($scope.serverList)
      $scope.$apply()
    })
  }

  // DetailController.$inject = ['$scope', 'RealEstateService', '$stateParams', 'ServerStatsService']
  //
  // function DetailController($scope, RealEstateService, $stateParams, BidService) {
  //   RealEstateService.getHome($stateParams.id)
  //     .then((home) => {
  //       $scope.home = home
  //     })
  //   $scope.bids = []
  //   BidService.on(function (data) {
  //     $scope.bids.push(data)
  //     $scope.average = data.average
  //     console.log($scope.bids)
  //     $scope.$apply()
  //   })
  // }
