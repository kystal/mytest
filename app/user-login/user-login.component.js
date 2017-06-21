'use strict';

angular.
  module('userLogin').
  component('userLogin', {
    templateUrl: 'user-login/user-login.template.html',
    controller:
      function userLoginController($scope,$location) {
         $scope.username="";
         $scope.userpwd="";
         $scope.loginUser="";
         $scope.login=function(){
                if($scope.username!="" && $scope.userpwd!=""){
                  $scope.loginUser=$scope.username;
                   $location.path('./index.html');
                }else{
                    alert("Incorrect username/password");
                }
       }
        $scope.logout=function(){
          $scope.loginUser='';
          $location.path('./user-login/user-login.template.html');
        }
    }
  });
