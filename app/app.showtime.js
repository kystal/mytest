var app = angular.module('phonecatApp', []);
app.controller('timeCtrl', function($scope, $interval) {
  $scope.theTime = new Date().toLocaleTimeString();            //初始化时间
  $interval(function () {
    $scope.theTime = new Date().toLocaleTimeString();     //类似js中的setInterval()函数，每1秒重新调用当前时间
  }, 1000);
});

