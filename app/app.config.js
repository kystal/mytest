'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');//前缀

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
          //template: '{{$ctrl.phoneId}} <phone-detail></phone-detail>'没有变化
        }).
        when('/login',{
          template:'<user-login></user-login>'
        }).
        when('/logout',{
           template:'<user-login></user-login>'
        }).
        otherwise('/phones');
    }
  ]);
