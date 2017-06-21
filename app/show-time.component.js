'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('showTime', {
    template: "<div>{{theTime|date:'yyyy-MM-dd HH:mm:ss'}}</div>",
    controller: 
      function showTimeController($scope, $interval) {
        $scope.theTime = new Date().getTime();            //初始化时间

        $interval(function () {

        $scope.theTime = new Date().getTime();     //类似js中的setInterval()函数，每1秒重新调用当前时间

        }, 1000);
    }
  });
