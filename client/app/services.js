angular.module('gWarRoom')
  .factory('ServerStatsService', ServerStatsService);

  ServerStatsService.$inject = ['$stateParams']

  function ServerStatsService ($stateParams) {
    var socket = io()
    var callbacks = []
    // console.log("stateParams: " + $stateParams.id);

    socket.on('server_data', function (data) {
      // console.log(data[0]);

      // callbacks.forEach(function (callback) {
      //   var amount, average;
      //   data.body.forEach(function (house, index) {
      //     if (house.id == $stateParams.id) {
      //       amount = house.currentBid;
      //       average = data.average[house.id].average
      //     }
      //   })
        // callback({amount: amount, time: data.time, average: average})
      // })
    })
    return {
      on: function (callback) {
        callbacks.push(callback)
      }
    }
  }
