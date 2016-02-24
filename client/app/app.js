angular.module('gWarRoom', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/servers');

    $stateProvider.state('servers', {
      templateUrl: 'templates/servers.html',
      controller: 'ServerListController',
      url: '/servers'
    })
    // .state('detail', {
    //   templateUrl: 'templates/detail.html',
    //   controller: 'ServerDetailController',
    //   url: '/servers/:id'
    // })
  });
